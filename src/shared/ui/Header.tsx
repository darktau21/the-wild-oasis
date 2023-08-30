import { memo } from 'react';
import styled from 'styled-components';

const Header = memo(styled.header`
  padding: 1.2rem 4.8rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
`);

export default Header;
