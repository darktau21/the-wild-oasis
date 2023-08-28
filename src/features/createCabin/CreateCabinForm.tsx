import { memo, MouseEventHandler } from 'react';
import { CabinForm } from '@entities/cabin';
import { cabinApi, type NewCabin } from '@shared/api';
import { useMutateQueryForm } from '@shared/hooks';
import { Button } from '@shared/ui';

type CreateCabinFormProps = {
  onCancel: MouseEventHandler;
};

const CreateCabinForm = memo(function CreateCabinForm({
  onCancel,
}: CreateCabinFormProps) {
  const { handleSubmit, register, errors } = useMutateQueryForm<NewCabin>({
    mutationFn: cabinApi.create,
    queryKey: ['cabins'],
    successMessage: 'Cabin successfully created',
  });
  return (
    <CabinForm handleSubmit={handleSubmit} register={register} errors={errors}>
      <Button onClick={onCancel} size={'medium'} variation={'secondary'}>
        Cancel
      </Button>
      <Button size={'medium'} variation={'primary'}>
        Create cabin
      </Button>
    </CabinForm>
  );
});

export default CreateCabinForm;
