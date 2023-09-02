import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledClearLayout = styled.main`
  display: grid;
  grid-template-columns: 48rem;
  gap: 3.2rem;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-grey-50);
`;

const ClearLayout = () => (
  <StyledClearLayout>
    <Outlet />
  </StyledClearLayout>
);

export default ClearLayout;
