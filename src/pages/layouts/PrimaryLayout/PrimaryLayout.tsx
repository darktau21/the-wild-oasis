import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Header, Spinner } from '@shared/ui';
import AppSidebar from './AppSidebar';

const StyledPrimaryLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 26rem 1fr;
  height: 100vh;
`;

const StyledMain = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
  background-color: var(--color-grey-50);
`;

const PrimaryLayout = () => {
  return (
    <StyledPrimaryLayout>
      <Header />
      <AppSidebar />
      <StyledMain>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Container>
      </StyledMain>
    </StyledPrimaryLayout>
  );
};

export default PrimaryLayout;
