import { FormEventHandler, type PropsWithChildren } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { type NewCabin } from '@shared/api';
import { UIFormComponents } from '@shared/ui';

const { UIFileInput, UIForm, UIFormRow, UIInput, UITextarea } =
  UIFormComponents;

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
    <UIForm onSubmit={handleSubmit}>
      <UIFormRow error={errors.name?.message} id='name' label={'Cabin name'}>
        <UIInput id='name' type='text' {...register('name', registerOptions)} />
      </UIFormRow>

      <UIFormRow
        error={errors.maxCapacity?.message}
        id='maxCapacity'
        label={'Maximum capacity'}
      >
        <UIInput
          id='maxCapacity'
          type='number'
          {...register('maxCapacity', {
            ...registerOptions,
            min: { message: 'Capacity should be at least 1', value: 1 },
          })}
        />
      </UIFormRow>

      <UIFormRow
        error={errors.regularPrice?.message}
        id='regularPrice'
        label={'Regular price'}
      >
        <UIInput
          id='regularPrice'
          type='number'
          {...register('regularPrice', {
            ...registerOptions,
            min: { message: 'Price should be at least 1', value: 1 },
          })}
        />
      </UIFormRow>

      <UIFormRow
        error={errors.discount?.message}
        id='discount'
        label={'Discount'}
      >
        <UIInput
          defaultValue={0}
          id='discount'
          type='number'
          {...register('discount', {
            ...registerOptions,
            min: { message: 'Discount should be 0 or higher', value: 0 },
            validate: (value, formValues) => {
              if (
                typeof value === 'undefined' ||
                typeof formValues.regularPrice === 'undefined'
              )
                return;
              if (+formValues.regularPrice < +value) {
                return 'Discount should be less than price';
              }
            },
          })}
        />
      </UIFormRow>

      <UIFormRow
        error={errors.description?.message}
        id={'description'}
        label={'Description for website'}
      >
        <UITextarea
          defaultValue=''
          id='description'
          {...register('description', registerOptions)}
        />
      </UIFormRow>

      <UIFormRow id='image' label={'Cabin photo'}>
        <UIFileInput
          accept='image/*'
          id='image'
          type={'file'}
          {...register('image')}
        />
      </UIFormRow>

      <UIFormRow>{children}</UIFormRow>
    </UIForm>
  );
};

export default CabinForm;
