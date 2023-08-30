import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const SUCCESS_NOTIFICATION_SCREEN_TIME = 3;
const ERROR_NOTIFICATION_SCREEN_TIME = 5;

const AppNotificationsProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          error: {
            duration: ERROR_NOTIFICATION_SCREEN_TIME * 1000,
          },
          style: {
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
          success: {
            duration: SUCCESS_NOTIFICATION_SCREEN_TIME * 1000,
          },
        }}
        containerStyle={{ margin: '8px' }}
        gutter={12}
        position={'top-center'}
      />
    </>
  );
};

export default AppNotificationsProvider;
