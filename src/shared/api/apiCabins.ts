import supabaseClient from './supabase';

export async function getCabins() {
  const { data: cabins, error } = await supabaseClient
    .from('cabins')
    .select('*');

  if (error) {
    throw new Error('Could not load cabins');
  }

  return cabins;
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
