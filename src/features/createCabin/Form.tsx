import { memo, MouseEventHandler } from 'react';
import { CabinForm } from '@entities/cabin';
import { cabinApi, type NewCabin } from '@shared/api';
import { useMutationQueryForm } from '@shared/hooks';
import { UIButton } from '@shared/ui';

type CreateCabinFormProps = {
  onCancel: MouseEventHandler;
};

const Form = memo(function CreateCabinForm({ onCancel }: CreateCabinFormProps) {
  const { errors, handleSubmit, register } = useMutationQueryForm<NewCabin>({
    mutationFn: cabinApi.create,
    queryKey: ['cabins'],
    successMessage: 'Cabin successfully created',
  });
  return (
    <CabinForm errors={errors} handleSubmit={handleSubmit} register={register}>
      <UIButton onClick={onCancel} size={'medium'} variation={'secondary'}>
        Cancel
      </UIButton>
      <UIButton size={'medium'} variation={'primary'}>
        Create cabin
      </UIButton>
    </CabinForm>
  );
});

export default Form;
