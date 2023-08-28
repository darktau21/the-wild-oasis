import { createClient } from '@supabase/supabase-js';
import { Database } from './apiTypes';

const env = import.meta.env;

const supabaseUrl = env.REACT_SUPABASE_URL;
const supabaseKey = env.REACT_SUPABASE_KEY;
const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export default supabaseClient;
