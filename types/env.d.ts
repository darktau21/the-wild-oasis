/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_SUPABASE_KEY: string;
  readonly REACT_SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
