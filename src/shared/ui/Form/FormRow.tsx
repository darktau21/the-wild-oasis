import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import FormError from './FormError';
import FormLabel from './FormLabel';

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
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
  label?: string;
  error?: string;
  id?: string;
}>;

const FormRow = ({ label, error, children, id }: FormRowProps) => (
  <StyledFormRow>
    {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
    {children}
    {error && <FormError>{error}</FormError>}
  </StyledFormRow>
);

export default FormRow;
