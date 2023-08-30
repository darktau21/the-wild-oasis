import styled from 'styled-components';
import TableRow from './TableRow';

const TableHeader = styled(TableRow)`
  font-weight: 600;
  color: var(--color-grey-600);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
`;

export default TableHeader;
