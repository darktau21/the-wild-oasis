import { uploadImage } from './apiImages';
import { ERROR_MESSAGES } from './constants';
import supabaseClient from './supabase';

export type NewCabin = {
  description: string;
  discount?: number;
  image?: FileList;
  maxCapacity: number;
  name: string;
  regularPrice: number;
};

export type Cabin = {
  description: string;
  discount: null | number;
  id: number;
  imageURL: null | string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
};

export type UpdateCabin = Pick<Cabin, 'id' | 'imageURL'> &
  Partial<Exclude<NewCabin, 'image'>>;

export async function getAll() {
  const { data: cabins, error } = await supabaseClient
    .from('cabins')
    .select('*');

  if (error) {
    console.error(error.message);
    throw new Error('Could not load cabins');
  }

  return cabins;
}

export async function create(newCabin: NewCabin) {
  const image = newCabin.image?.[0];
  delete newCabin.image;

  const { data: cabin, error: creationError } = await supabaseClient
    .from('cabins')
    .insert([newCabin])
    .select('id')
    .single();

  if (creationError || !cabin) {
    console.error(creationError.message);
    throw new Error(ERROR_MESSAGES.cabin.create);
  }

  const id = cabin.id;
  if (image) {
    try {
      const imageURL = await uploadImage(image, 'cabin-imgs');

      await update({ id, imageURL });
    } catch (error) {
      if (error instanceof Error) {
        await remove(id);
        throw new Error(ERROR_MESSAGES.cabin.create);
      }
    }
  }
}

export async function update(updateCabin: UpdateCabin) {
  const { data: updatedCabin, error: updatingError } = await supabaseClient
    .from('cabins')
    .update(updateCabin)
    .eq('id', updateCabin.id)
    .select();

  if (updatingError) {
    console.error(updatingError.message);
    throw new Error(ERROR_MESSAGES.cabin.update);
  }

  return updatedCabin;
}

export async function remove(id: Cabin['id']) {
  const { data: cabin, error } = await supabaseClient
    .from('cabins')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    throw new Error('Cabin could not be deleted');
  }

  return cabin;
}
