import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const SUCCESS_NOTIFICATION_SCREEN_TIME = 3;
const ERROR_NOTIFICATION_SCREEN_TIME = 5;

const AppNotificationsProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster
        position={'top-center'}
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: SUCCESS_NOTIFICATION_SCREEN_TIME * 1000,
          },
          error: {
            duration: ERROR_NOTIFICATION_SCREEN_TIME * 1000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </>
  );
};

export default AppNotificationsProvider;
