import { Database } from './apiTypes';

type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];

export type Cabin = Tables<'cabins'>;
export type NewCabin = Tables<'cabins'> & { image?: FileList };
