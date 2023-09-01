import { nanoid } from 'nanoid';
import { ERROR_MESSAGES, SUPABASE_URL } from '@shared/api/constants';
import supabaseClient from '@shared/api/supabase';

type ImageStorages = 'cabin-imgs';

export async function uploadImage(image: File, storage: ImageStorages) {
  const imageName = `${nanoid(10)}-${image?.name}`.replaceAll('/', '');
  const imageURL = `${SUPABASE_URL}/storage/v1/object/public/${storage}/${imageName}`;

  const { error: storageError } = await supabaseClient.storage
    .from(storage)
    .upload(imageName, image);

  if (storageError) {
    console.error(storageError.message);
    throw new Error(ERROR_MESSAGES.image.upload);
  }

  return imageURL;
}
