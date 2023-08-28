import { ReactElement } from 'react';
import { TableRow } from '@shared/ui';
import { formatCurrency } from '@shared/utils';
import CabinDiscount from './CabinDIscount';
import CabinImg from './CabinImg';
import CabinName from './CabinName';
import CabinPrice from './CabinPrice';

type CabinRowProps = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  deleteButton: ReactElement;
  imageURL: string | null;
};
const CabinRow = ({
  name,
  maxCapacity,
  regularPrice,
  discount,
  deleteButton,
  imageURL,
}: CabinRowProps) => {
  return (
    <TableRow>
      {imageURL ? <CabinImg src={imageURL} /> : <div />}
      <CabinName>{name}</CabinName>
      <div>Fits up to {maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(regularPrice)}</CabinPrice>
      <CabinDiscount>{discount}</CabinDiscount>
      {deleteButton}
    </TableRow>
  );
};

export default CabinRow;
