import CabinType from '@entities/cabin/CabinType';
import CabinDiscount from '@entities/cabin/ui/CabinDIscount';
import CabinImg from '@entities/cabin/ui/CabinImg';
import CabinName from '@entities/cabin/ui/CabinName';
import CabinPrice from '@entities/cabin/ui/CabinPrice';
import { TableRow } from '@shared/ui';
import { formatCurrency } from '@shared/utils';
import { ReactElement } from 'react';

type CabinRowProps = Pick<
  CabinType,
  'name' | 'maxCapacity' | 'regularPrice' | 'discount'
> & {
  deleteButton: ReactElement;
};
const CabinRow = ({
  name,
  maxCapacity,
  regularPrice,
  discount,
  deleteButton,
}: CabinRowProps) => {
  return (
    <TableRow>
      <CabinImg src={''} />
      <CabinName>{name}</CabinName>
      <div>Fits up to {maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(regularPrice)}</CabinPrice>
      <CabinDiscount>{discount}</CabinDiscount>
      {deleteButton}
    </TableRow>
  );
};

export default CabinRow;
