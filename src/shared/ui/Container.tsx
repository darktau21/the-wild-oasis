import { memo } from 'react';
import styled from 'styled-components';

const Container = memo(styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 120rem;
  margin: 0 auto;
`);

export default Container;
