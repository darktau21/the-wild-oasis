import { useMutation, useQueryClient } from '@tanstack/react-query';
import { memo } from 'react';
import toast from 'react-hot-toast';
import { cabinApi } from '@shared/api';
import { Button } from '@shared/ui';

type DeleteCabinProps = {
  cabinId: number;
};

const DeleteCabin = memo(function DeleteCabin({ cabinId }: DeleteCabinProps) {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
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
    <Button
      disabled={isLoading}
      onClick={() => mutate(cabinId)}
      size={'small'}
      variation={'danger'}
    >
      Delete cabin
    </Button>
  );
});

export default DeleteCabin;
