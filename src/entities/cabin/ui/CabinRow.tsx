import { memo, PropsWithChildren } from 'react';
import { TableRow } from '@shared/ui';
import { formatCurrency } from '@shared/utils';
import CabinDiscount from './CabinDIscount';
import CabinImg from './CabinImg';
import CabinName from './CabinName';
import CabinPrice from './CabinPrice';

type CabinRowProps = PropsWithChildren<{
  discount: null | number;
  imageURL: null | string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}>;
const CabinRow = memo(function CabinRow({
  children,
  discount,
  imageURL,
  maxCapacity,
  name,
  regularPrice,
}: CabinRowProps) {
  return (
    <TableRow>
      {imageURL ? <CabinImg src={imageURL} /> : <div />}
      <CabinName>{name}</CabinName>
      <div>Fits up to {maxCapacity} guests</div>
      <CabinPrice>{formatCurrency(regularPrice)}</CabinPrice>
      {discount ? <CabinDiscount>{discount}</CabinDiscount> : <span>&mdash;</span>}
      {children}
    </TableRow>
  );
});

export default CabinRow;
