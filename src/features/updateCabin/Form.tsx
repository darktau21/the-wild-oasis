import { memo, MouseEventHandler } from 'react';
import { CabinForm } from '@entities/cabin';
import { cabinApi, type NewCabin } from '@shared/api';
import { useMutationQueryForm } from '@shared/hooks';

type UpdateCabinFormProps = {
  id: number;
  onCancel: MouseEventHandler;
};

const Form = memo(function UpdateCabinForm({}: UpdateCabinFormProps) {
  const { errors, handleSubmit, register } = useMutationQueryForm<NewCabin>({
    mutationFn: cabinApi.update,
    queryKey: ['cabins'],
    successMessage: 'Cabin successfully created',
  });
  return (
    <CabinForm
      errors={errors}
      handleSubmit={handleSubmit}
      register={register}
    ></CabinForm>
  );
});

export default Form;
