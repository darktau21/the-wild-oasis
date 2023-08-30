import { memo } from 'react';
import { DeleteCabin } from '@features/deleteCabin';
import { CabinRow } from '@entities/cabin';
import { Cabin } from '@shared/api';
import { Spinner, Table, TableHeader } from '@shared/ui';

type CabinListProps = {
  cabins?: Cabin[];
};

const CabinList = memo(function CabinsList({ cabins }: CabinListProps) {
  if (!cabins?.length) {
    return <Spinner />;
  }

  return (
    <Table role={'table'}>
      <TableHeader role={'rowheader'}>
        <div />
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div />
      </TableHeader>
      {cabins &&
        cabins.map(
          ({ discount, id, imageURL, maxCapacity, name, regularPrice }) => (
            <CabinRow
              discount={discount}
              imageURL={imageURL}
              key={id}
              maxCapacity={maxCapacity}
              name={name}
              regularPrice={regularPrice}
            >
              <DeleteCabin cabinId={id} />
            </CabinRow>
          )
        )}
    </Table>
  );
});

export default CabinList;
