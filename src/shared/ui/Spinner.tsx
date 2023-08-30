import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = memo(styled.div`
  width: 6.4rem;
  aspect-ratio: 1;
  margin: 4.8rem auto;
  background:
    radial-gradient(farthest-side, var(--color-brand-600) 94%, rgb(0 0 0 / 0))
      top/10px 10px no-repeat,
    conic-gradient(rgb(0 0 0 / 0) 30%, var(--color-brand-600));
  border-radius: 50%;
  mask: radial-gradient(
    farthest-side,
    rgb(0 0 0 / 0) calc(100% - 10px),
    rgb(0 0 0) 0
  );
  animation: ${rotate} 1.5s infinite linear;
`);

export default Spinner;
