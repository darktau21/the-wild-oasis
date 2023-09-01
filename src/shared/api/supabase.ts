import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY, SUPABASE_URL } from '@shared/api/constants';
import { Database } from './apiTypes';

const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

export default supabaseClient;
