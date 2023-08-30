import { FormEventHandler, type PropsWithChildren } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { type NewCabin } from '@shared/api';
import { FileInput, Form, FormRow, Input, Textarea } from '@shared/ui';

const registerOptions = {
  required: 'This field is required',
};

type CabinFormProps = PropsWithChildren<{
  errors: FieldErrors<NewCabin>;
  // onSubmit: SubmitHandler<NewCabin>;
  handleSubmit: FormEventHandler;
  // onError: SubmitErrorHandler<NewCabin>;
  register: UseFormRegister<NewCabin>;
}>;

const CabinForm = ({
  children,
  errors,
  handleSubmit,
  register,
}: CabinFormProps) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow error={errors.name?.message} id='name' label={'Cabin name'}>
        <Input id='name' type='text' {...register('name', registerOptions)} />
      </FormRow>

      <FormRow
        error={errors.maxCapacity?.message}
        id='maxCapacity'
        label={'Maximum capacity'}
      >
        <Input
          id='maxCapacity'
          type='number'
          {...register('maxCapacity', {
            ...registerOptions,
            min: { message: 'Capacity should be at least 1', value: 1 },
          })}
        />
      </FormRow>

      <FormRow
        error={errors.regularPrice?.message}
        id='regularPrice'
        label={'Regular price'}
      >
        <Input
          id='regularPrice'
          type='number'
          {...register('regularPrice', {
            ...registerOptions,
            min: { message: 'Price should be at least 1', value: 1 },
          })}
        />
      </FormRow>

      <FormRow
        error={errors.discount?.message}
        id='discount'
        label={'Discount'}
      >
        <Input
          defaultValue={0}
          id='discount'
          type='number'
          {...register('discount', {
            ...registerOptions,
            min: { message: 'Discount should be at least 1', value: 1 },
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
        error={errors.description?.message}
        id={'description'}
        label={'Description for website'}
      >
        <Textarea
          defaultValue=''
          id='description'
          {...register('description', registerOptions)}
        />
      </FormRow>

      <FormRow id='image' label={'Cabin photo'}>
        <FileInput
          accept='image/*'
          id='image'
          type={'file'}
          {...register('image')}
        />
      </FormRow>

      <FormRow>{children}</FormRow>
    </Form>
  );
};

export default CabinForm;
