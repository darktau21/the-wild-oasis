/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_SUPABASE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
