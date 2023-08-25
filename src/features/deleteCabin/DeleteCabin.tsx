import { deleteCabin } from '@shared/api/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

type DeleteCabinProps = {
  cabinId: number;
};

const DeleteCabin = ({ cabinId }: DeleteCabinProps) => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: (id: number) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
  });
  return (
    <button disabled={isLoading} onClick={() => mutate(cabinId)}>
      Delete cabin
    </button>
  );
};

export default DeleteCabin;
