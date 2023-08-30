import { memo } from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  large: css`
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
    font-weight: 500;
  `,
  medium: css`
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
    font-weight: 500;
  `,
  small: css`
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  `,
};

const variations = {
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
};

type ButtonProps = {
  size?: keyof typeof sizes;
  variation?: keyof typeof variations;
};

const Button = memo(styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${({ size }) => sizes[size ?? 'medium']}
  ${({ variation }) => variations[variation ?? 'primary']}
`);

export default Button;
