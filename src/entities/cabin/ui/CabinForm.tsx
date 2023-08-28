import { FormEventHandler, type PropsWithChildren } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { type NewCabin } from '@shared/api';
import { FileInput, Form, FormRow, Input, Textarea } from '@shared/ui';

const registerOptions = {
  required: 'This field is required',
};

type CabinFormProps = PropsWithChildren<{
  handleSubmit: FormEventHandler;
  // onSubmit: SubmitHandler<NewCabin>;
  // onError: SubmitErrorHandler<NewCabin>;
  register: UseFormRegister<NewCabin>;
  errors: FieldErrors<NewCabin>;
}>;

const CabinForm = ({
  handleSubmit,
  register,
  errors,
  children,
}: CabinFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={'Cabin name'} id='name' error={errors.name?.message}>
        <Input type='text' id='name' {...register('name', registerOptions)} />
      </FormRow>

      <FormRow
        label={'Maximum capacity'}
        id='maxCapacity'
        error={errors.maxCapacity?.message}
      >
        <Input
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            ...registerOptions,
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow
        label={'Regular price'}
        id='regularPrice'
        error={errors.regularPrice?.message}
      >
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            ...registerOptions,
            min: { value: 1, message: 'Price should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow
        label={'Discount'}
        id='discount'
        error={errors.discount?.message}
      >
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            ...registerOptions,
            min: { value: 1, message: 'Discount should be at least 1' },
            validate: (value, formValues) => {
              if (
                typeof value === 'undefined' ||
                typeof formValues.regularPrice === 'undefined'
              )
                return;
              if (formValues.regularPrice < value) {
                return 'Discount should be less than price';
              }
            },
          })}
        />
      </FormRow>

      <FormRow
        label={'Description for website'}
        id={'description'}
        error={errors.description?.message}
      >
        <Textarea
          id='description'
          defaultValue=''
          {...register('description', registerOptions)}
        />
      </FormRow>

      <FormRow label={'Cabin photo'} id='image'>
        <FileInput
          id='image'
          type={'file'}
          accept='image/*'
          {...register('image')}
        />
      </FormRow>

      <FormRow>{children}</FormRow>
    </Form>
  );
};

export default CabinForm;
