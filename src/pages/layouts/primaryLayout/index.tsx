import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { UIContainer, UIHeader, UISpinner } from '@shared/ui';

import Sidebar from './Sidebar';

const StyledLayout = styled.div`
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
    <StyledLayout>
      <UIHeader>Header</UIHeader>
      <Sidebar />
      <StyledMain>
        <UIContainer>
          <Suspense fallback={<UISpinner />}>
            <Outlet />
          </Suspense>
        </UIContainer>
      </StyledMain>
    </StyledLayout>
  );
};

export default PrimaryLayout;
