import { Header, Sidebar } from '@shared/ui';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPrimaryLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const StyledMain = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;

const PrimaryLayout = () => {
  return (
    <StyledPrimaryLayout>
      <Header />
      <Sidebar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledPrimaryLayout>
  );
};

export default PrimaryLayout;
