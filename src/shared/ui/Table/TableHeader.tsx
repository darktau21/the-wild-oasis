import styled from 'styled-components';
import TableRow from './TableRow';

const TableHeader = styled(TableRow)`
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

export default TableHeader;
