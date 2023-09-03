import {
  type MutationFunction,
  type QueryKey,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';

type useMutateQueryFormOptions<Data> = {
  defaultValues?: DefaultValues<Data>;
  mutationFn: MutationFunction<void, Data>;
  queryKey: QueryKey;
  successMessage: string;
};

const useMutationQueryForm = <TFields extends FieldValues>({
  defaultValues,
  mutationFn,
  queryKey,
  successMessage,
}: useMutateQueryFormOptions<TFields>) => {
  const {
    formState,
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
  } = useForm<TFields>({
    defaultValues,
  });
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, unknown, TFields, unknown>({
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

  const onSubmit: SubmitHandler<TFields> = (data) => mutate(data);

  return { errors, handleSubmit: hookFormHandleSubmit(onSubmit), register };
};

export default useMutationQueryForm;
