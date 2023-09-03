import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import FormError from './FormError';
import FormLabel from './FormLabel';

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  align-items: center;
  padding: 1.2rem 0;

  &:has(button) {
    display: flex;
    gap: 1.2rem;
    justify-content: flex-end;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

type FormRowProps = PropsWithChildren<{
  error?: string;
  id?: string;
  label?: string;
}>;

const FormRow = ({ children, error, id, label }: FormRowProps) => (
  <StyledFormRow>
    {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
    {children}
    {error && <FormError>{error}</FormError>}
  </StyledFormRow>
);

export default FormRow;
