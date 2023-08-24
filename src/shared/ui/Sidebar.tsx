import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
  background-color: aliceblue;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`;

const Sidebar = () => {
  return <StyledAside>SIDEBAR</StyledAside>;
};

export default Sidebar;
