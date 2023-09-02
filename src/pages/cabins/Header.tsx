import { memo } from 'react';
import { UIHeading, UIRow } from '@shared/ui';

const Header = memo(function CabinsHeader() {
  return (
    <UIRow type='horizontal'>
      <UIHeading as='h1'>All cabins</UIHeading>
      <p>Filter / Sort</p>
    </UIRow>
  );
});

export default Header;
