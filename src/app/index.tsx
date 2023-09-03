import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  AppNotificationsProvider,
  AppQueryProvider,
  AppRouterProvider,
  AppStyleProvider,
} from './providers';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <StrictMode>
    <AppStyleProvider>
      <AppQueryProvider>
        <AppNotificationsProvider>
          <AppRouterProvider />
        </AppNotificationsProvider>
      </AppQueryProvider>
    </AppStyleProvider>
  </StrictMode>
);
