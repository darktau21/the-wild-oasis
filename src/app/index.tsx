import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  AppNotificationsProvider,
  AppQueryProvider,
  AppRouterProvider,
  AppStyleProvider,
} from './providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
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
