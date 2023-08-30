import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

export default NavigationLink;
