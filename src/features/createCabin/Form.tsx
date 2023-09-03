import { HTMLInputTypeAttribute, memo, type MouseEventHandler } from 'react';
import { cabinApi, type NewCabin } from '@shared/api';
import { useMutationQueryForm } from '@shared/hooks';
import { UIButton } from '@shared/ui';
import { RegisterOptions } from 'react-hook-form';

type CreateCabinFormProps = {
  onCancel: MouseEventHandler;
};

const registerOptions: RegisterOptions<NewCabin, keyof NewCabin> = {};

const Form = memo(function CreateCabinForm({ onCancel }: CreateCabinFormProps) {
  const { errors, handleSubmit, register } = useMutationQueryForm<NewCabin>({
    mutationFn: cabinApi.create,
    queryKey: ['cabins'],
    successMessage: 'Cabin successfully created',
  });
  return (
    <UIForm onSubmit={handleSubmit}>
      <input id={'id'} {...register('id')} />
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
                value === null ||
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

      <UIFormRow>
        <UIButton onClick={onCancel} size={'medium'} variation={'secondary'}>
          Cancel
        </UIButton>
        <UIButton size={'medium'} variation={'primary'}>
          {submit}
        </UIButton>
      </UIFormRow>
    </UIForm>
  );
});

export default Form;
