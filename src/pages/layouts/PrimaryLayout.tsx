import { Header, Spinner } from '@shared/ui';
import AppSidebar from '@widgets/AppSidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledPrimaryLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const StyledMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const PrimaryLayout = () => {
  return (
    <StyledPrimaryLayout>
      <Header />
      <AppSidebar />
      <StyledMain>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </StyledPrimaryLayout>
  );
};

export default PrimaryLayout;