import { memo, PropsWithChildren } from 'react';
import Discount from '@entities/cabin/ui/DIscount';
import Name from '@entities/cabin/ui/Name';
import Price from '@entities/cabin/ui/Price';
import { UITableComponents } from '@shared/ui';
import { formatCurrency } from '@shared/utils';

import Img from './Img';

type CabinRowProps = PropsWithChildren<{
  discount: null | number;
  imageURL: null | string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
}>;

const { UITableRow } = UITableComponents;

const CabinRow = memo(function CabinRow({
  children,
  discount,
  imageURL,
  maxCapacity,
  name,
  regularPrice,
}: CabinRowProps) {
  return (
    <UITableRow>
      {imageURL ? <Img src={imageURL} /> : <div />}
      <Name>{name}</Name>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? <Discount>{discount}</Discount> : <span>&mdash;</span>}
      {children}
    </UITableRow>
  );
});

export default CabinRow;
