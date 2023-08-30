import styled, { css } from 'styled-components';

type RowTypes = 'horizontal' | 'vertical';

type RowProps = {
  type?: RowTypes;
};

const Row = styled.div<RowProps>`
  display: flex;

  ${({ type }) => {
    type ??= 'vertical';

    switch (type) {
      case 'horizontal':
        return css`
          align-items: center;
          justify-content: space-between;
        `;
      case 'vertical':
        return css`
          flex-direction: column;
          gap: 1.6rem;
        `;
    }
  }}
`;

export default Row;
