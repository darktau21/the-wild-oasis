import { AppRouterProvider, AppStyleProvider } from '@app/providers';
import supabaseClient from '@shared/api/supabase';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <StrictMode>
    <AppStyleProvider>
      <AppRouterProvider />
    </AppStyleProvider>
  </StrictMode>
);
