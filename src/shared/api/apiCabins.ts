import { nanoid } from 'nanoid';
import supabaseClient from './supabase';

const SUPABASE_URL = import.meta.env.REACT_SUPABASE_URL;

export type NewCabin = {
  name: string;
  description: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image?: FileList;
};

export type Cabin = {
  id: number;
  name: string;
  description: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  imageURL: string | null;
};

export async function getAll() {
  const { data: cabins, error } = await supabaseClient
    .from('cabins')
    .select('*');

  if (error) {
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
    .select('id');

  const cabinID = cabin?.[0].id;

  if (creationError) {
    throw new Error(errorMessage);
  }

  if (image) {
    const imageName = `${nanoid(10)}-${image?.name}`.replaceAll('/', '');
    const imageURL = `${SUPABASE_URL}/storage/v1/object/public/cabin-imgs/${imageName}`;

    const { error: storageError } = await supabaseClient.storage
      .from('cabin-imgs')
      .upload(imageName, image);

    if (storageError) {
      await remove(cabinID!);
      throw new Error(errorMessage);
    }

    const { error: updatingError } = await supabaseClient
      .from('cabins')
      .update({ imageURL })
      .eq('id', cabinID!);

    if (updatingError) {
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
