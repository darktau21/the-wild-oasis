import { uploadImage } from './apiImages';
import { ERROR_MESSAGES } from './constants';
import { Cabin, NewCabin } from './entityTypes';
import supabaseClient from './supabase';

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

  const { data: cabin, error: creationError } = await supabaseClient
    .from('cabins')
    .insert([newCabin])
    .select()
    .single();

  if (creationError || !cabin) {
    console.error(creationError.message);
    throw new Error(ERROR_MESSAGES.cabin.create);
  }

  const id = cabin.id;
  if (image) {
    try {
      const imageURL = await uploadImage(image, 'cabin-imgs');

      await update({ ...cabin, imageURL });
    } catch (error) {
      if (error instanceof Error) {
        await remove(id);
        throw new Error(ERROR_MESSAGES.cabin.create);
      }
    }
  }
}

export async function update(updateCabin: NewCabin) {
  const { error: updatingError } = await supabaseClient
    .from('cabins')
    .update(updateCabin)
    .eq('id', updateCabin.id)
    .select();

  if (updatingError) {
    console.error(updatingError.message);
    throw new Error(ERROR_MESSAGES.cabin.update);
  }
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
