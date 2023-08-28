import {
  type MutationFunction,
  type QueryKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type useMutateQueryFormOptions<Data> = {
  mutationFn: MutationFunction<void, Data>;
  queryKey: QueryKey;
  successMessage: string;
  defaultValues?: DefaultValues<Data>;
};

const useMutateQueryForm = <FormValues extends object>({
  mutationFn,
  queryKey,
  successMessage,
  defaultValues,
}: useMutateQueryFormOptions<FormValues>) => {
  const {
    register,
    formState,
    handleSubmit: hookFormHandleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues,
  });
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, unknown, FormValues, unknown>({
    mutationFn,
    onSuccess: async () => {
      toast.success(successMessage);
      await queryClient.invalidateQueries(queryKey);
      reset();
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => mutate(data);

  return { register, handleSubmit: hookFormHandleSubmit(onSubmit), errors };
};

export default useMutateQueryForm;
