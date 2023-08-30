import { memo } from 'react';
import styled, { css } from 'styled-components';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingProps = {
  as: HeadingTypes;
};

const Heading = memo(styled.h1<HeadingProps>`
  ${({ as }) => {
    as ??= 'h1';

    switch (as) {
      case 'h1':
        return css`
          font-size: 3rem;
          font-weight: 600;
        `;
      case 'h2':
        return css`
          font-size: 2rem;
          font-weight: 600;
        `;
      case 'h3':
        return css`
          font-size: 2rem;
          font-weight: 500;
        `;
      case 'h4':
        return css`
          font-size: 3rem;
          font-weight: 600;
          text-align: center;
        `;
    }
  }}

  line-height: 1.4;
`);

export default Heading;
