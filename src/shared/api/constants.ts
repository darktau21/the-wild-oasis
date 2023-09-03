import { Database } from '@shared/api/apiTypes';

export const SUPABASE_URL = import.meta.env.REACT_SUPABASE_URL;
export const SUPABASE_KEY = import.meta.env.REACT_SUPABASE_KEY;
export const ERROR_MESSAGES = {
  cabin: {
    create: 'Could not create cabin, try again later',
    update: 'Could not update cabin, try again later',
  },
  image: {
    upload: 'Could not load image, try again later',
  },
};
