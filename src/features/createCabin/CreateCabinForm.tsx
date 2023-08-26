import { Cabin } from '@shared/api';
import { createCabin } from '@shared/api/apiCabins';
import { Button, FormComponents } from '@shared/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

// type FormValues = {
//   name: string;
//   maxCapacity: number;
//   regularPrice: number;
//   discount: number;
//   description: string;
//   // image?: File;
// };

type FormValues = Omit<Cabin, 'id' | 'created_at' | 'image'> & {
  image?: FileList;
};

const registerOptions = {
  required: 'This field is required',
};

const { Form, FormRow, Input, FileInput, Textarea } = FormComponents;

const CreateCabinForm = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin add successfully');
      queryClient.invalidateQueries(['cabins']);
      reset();
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });
  const { register, formState, handleSubmit, reset } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.image) {
      mutate({ ...data, image: data.image[0] });
    } else {
      mutate(data as Omit<Cabin, 'image'>);
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={'Cabin name'} id='name' error={errors.name?.message}>
        <Input type='text' id='name' {...register('name', registerOptions)} />
      </FormRow>

      <FormRow
        label={'Maximum capacity'}
        id='maxCapacity'
        error={errors.maxCapacity?.message}
      >
        <Input
          type='number'
          id='maxCapacity'
          {...register('maxCapacity', {
            ...registerOptions,
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow
        label={'Regular price'}
        id='regularPrice'
        error={errors.regularPrice?.message}
      >
        <Input
          type='number'
          id='regularPrice'
          {...register('regularPrice', {
            ...registerOptions,
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow
        label={'Discount'}
        id='discount'
        error={errors.discount?.message}
      >
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          {...register('discount', {
            ...registerOptions,
            min: { value: 1, message: 'Capacity should be at least 1' },
            validate: (value, formValues) => {
              if (value === null || formValues.regularPrice === null) return;
              if (formValues.regularPrice < value) {
                return 'Discount should be less than price';
              }
            },
          })}
        />
      </FormRow>

      <FormRow
        label={'Description for website'}
        id={'description'}
        error={errors.description?.message}
      >
        <Textarea
          id='description'
          defaultValue=''
          {...register('description', registerOptions)}
        />
      </FormRow>

      <FormRow label={'Cabin photo'} id='image'>
        <FileInput
          id='image'
          type={'file'}
          accept='image/*'
          {...register('image')}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button>Add cabin</Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
