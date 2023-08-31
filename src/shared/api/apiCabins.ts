import { nanoid } from 'nanoid';
import supabaseClient from './supabase';

const SUPABASE_URL = import.meta.env.REACT_SUPABASE_URL;

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
  const errorMessage = 'Could not create cabin';

  const image = newCabin.image?.[0];
  delete newCabin.image;

  const { data: cabin, error: creationError } = await supabaseClient
    .from('cabins')
    .insert([newCabin])
    .select('id')
    .single();

  const cabinID = cabin?.id;

  if (creationError) {
    console.error(creationError.message);
    throw new Error(errorMessage);
  }

  if (image) {
    const imageName = `${nanoid(10)}-${image?.name}`.replaceAll('/', '');
    const imageURL = `${SUPABASE_URL}/storage/v1/object/public/cabin-imgs/${imageName}`;

    const { error: storageError } = await supabaseClient.storage
      .from('cabin-imgs')
      .upload(imageName, image);

    if (storageError) {
      console.error(storageError.message);
      await remove(cabinID!);
      throw new Error(errorMessage);
    }

    const { error: updatingError } = await supabaseClient
      .from('cabins')
      .update({ imageURL })
      .eq('id', cabinID!);

    if (updatingError) {
      console.error(updatingError.message);
      await remove(cabinID!);
      throw new Error(errorMessage);
    }
  }
}

export async function remove(id: number) {
  const { data: cabin, error } = await supabaseClient
    .from('cabins')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error('Cabin could not be deleted');
  }

  return cabin;
}
