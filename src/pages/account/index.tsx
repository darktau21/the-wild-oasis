import { UIHeading, UIRow } from '@shared/ui';

const AccountPage = () => (
  <>
    <UIHeading as='h1'>Update your account</UIHeading>

    <UIRow>
      <UIHeading as='h3'>Update user data</UIHeading>
      <p>Update user data form</p>
    </UIRow>

    <UIRow>
      <UIHeading as='h3'>Update password</UIHeading>
      <p>Update user password form</p>
    </UIRow>
  </>
);

export default AccountPage;
