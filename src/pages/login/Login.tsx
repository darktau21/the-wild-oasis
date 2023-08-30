import styled from 'styled-components';

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  gap: 3.2rem;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-grey-50);
`;

const Login = () => <LoginLayout>Login</LoginLayout>;

export default Login;
