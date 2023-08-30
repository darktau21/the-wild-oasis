import { memo } from 'react';
import { Heading, Row } from '@shared/ui';

const CabinsHeader = memo(function CabinsHeader() {
  return (
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>
      <p>Filter / Sort</p>
    </Row>
  );
});

export default CabinsHeader;
