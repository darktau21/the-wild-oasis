import {
  type MutationFunction,
  type QueryKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type useMutateQueryFormOptions<Data> = {
  defaultValues?: DefaultValues<Data>;
  mutationFn: MutationFunction<void, Data>;
  queryKey: QueryKey;
  successMessage: string;
};

const useMutationQueryForm = <FormValues extends object>({
  defaultValues,
  mutationFn,
  queryKey,
  successMessage,
}: useMutateQueryFormOptions<FormValues>) => {
  const {
    formState,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
  } = useForm<FormValues>({
    defaultValues,
  });
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, unknown, FormValues, unknown>({
    mutationFn,
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
    onSuccess: async () => {
      toast.success(successMessage);
      await queryClient.invalidateQueries(queryKey);
      reset();
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => mutate(data);

  return { errors, handleSubmit: hookFormHandleSubmit(onSubmit), register };
};

export default useMutationQueryForm;
