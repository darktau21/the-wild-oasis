import { PropsWithChildren, memo } from 'react';
import styled from 'styled-components';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

type MainNavProps = PropsWithChildren;

const MainNav = memo(function MainNav({ children }: MainNavProps) {
  return (
    <nav>
      <NavList>{children}</NavList>
    </nav>
  );
});

export default MainNav;
