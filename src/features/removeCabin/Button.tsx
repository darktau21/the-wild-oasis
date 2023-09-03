import { UIButton } from '@shared/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { memo } from 'react';
import toast from 'react-hot-toast';
import { HiTrash } from 'react-icons/hi2';
import { cabinApi } from '@shared/api';

type DeleteCabinProps = {
  cabinId: number;
};

const Button = memo(function RemoveCabinButton({ cabinId }: DeleteCabinProps) {
  const queryClient = useQueryClient();
  const { isLoading: isRemoving, mutate: remove } = useMutation({
    mutationFn: cabinApi.remove,
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
    onSuccess: async () => {
      toast.success('Cabin successfully deleted');
      await queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
  });

  return (
    <UIButton
      disabled={isRemoving}
      onClick={() => remove(cabinId)}
      size={'medium'}
      variation={'danger'}
    >
      <HiTrash />
    </UIButton>
  );
});

export default Button;
