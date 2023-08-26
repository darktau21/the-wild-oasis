import CabinDiscount from './CabinDIscount';
import CabinImg from './CabinImg';
import CabinName from './CabinName';
import CabinPrice from './CabinPrice';
import { Cabin } from '@shared/api';
import { TableComponents } from '@shared/ui';
import { formatCurrency } from '@shared/utils';
import { ReactElement } from 'react';

const { TableRow } = TableComponents;

type CabinRowProps = Pick<
  Cabin,
  'name' | 'maxCapacity' | 'regularPrice' | 'discount' | 'image'
> & {
  deleteButton: ReactElement;
};
const CabinRow = ({
  name,
  maxCapacity,
  regularPrice,
  discount,
  deleteButton,
  image,
}: CabinRowProps) => {
  return (
    <TableRow>
      {image ? <CabinImg src={image} /> : <div />}
      <CabinName>{name}</CabinName>
      <div>Fits up to {maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(regularPrice)}</CabinPrice>
      <CabinDiscount>{discount}</CabinDiscount>
      {deleteButton}
    </TableRow>
  );
};

export default CabinRow;
