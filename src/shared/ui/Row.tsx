import styled, { css } from 'styled-components';

type RowTypes = 'horizontal' | 'vertical';

type RowProps = {
  type?: RowTypes;
};

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
