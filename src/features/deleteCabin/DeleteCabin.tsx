import { deleteCabin } from '@shared/api/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

type DeleteCabinProps = {
  cabinId: number;
};

const DeleteCabin = ({ cabinId }: DeleteCabinProps) => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: (id: number) => deleteCabin(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <button disabled={isLoading} onClick={() => mutate(cabinId)}>
      Delete cabin
    </button>
  );
};

export default DeleteCabin;
