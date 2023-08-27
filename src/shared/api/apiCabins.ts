import { nanoid } from 'nanoid';
import supabaseClient from './supabase';

const SUPABASE_URL = import.meta.env.REACT_SUPABASE_URL;

export type NewCabin = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image?: File;
};

export async function getCabins() {
  const { data: cabins, error } = await supabaseClient
    .from('cabins')
    .select('*');

  if (error) {
    throw new Error('Could not load cabins');
  }

  return cabins;
}

export async function createCabin(newCabin: NewCabin) {
  const image = newCabin.image;
  const imageName = `${nanoid(10)}-${image?.name}`.replaceAll('/', '');
  const imageURL = `${SUPABASE_URL}/storage/v1/object/public/cabin-imgs/${imageName}`;

  delete newCabin.image;
  const { data: cabin, error } = await supabaseClient
    .from('cabins')
    .insert([{ ...newCabin, image: imageURL }]);

  if (error) {
    throw new Error('Could create cabin');
  }

  if (typeof image !== 'undefined') {
    const { error: storageError } = await supabaseClient.storage
      .from('cabin-imgs')
      .upload(imageName, image);

    if (storageError) {
      throw new Error(storageError.message);
    }
  }

  return cabin;
}

export async function deleteCabin(id: number) {
  const { data: cabin, error } = await supabaseClient
    .from('cabins')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error('Cabin could not be deleted');
  }

  return cabin;
}
