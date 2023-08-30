import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  grid-row: 1/-1;
  gap: 3.2rem;
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
`;

type SidebarProps = PropsWithChildren;

const Sidebar = ({ children }: SidebarProps) => {
  return <StyledAside>{children}</StyledAside>;
};

export default Sidebar;
