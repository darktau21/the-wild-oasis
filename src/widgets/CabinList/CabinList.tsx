import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { DeleteCabin } from '@features/deleteCabin';
import { CabinRow } from '@entities/cabin';
import { cabinApi } from '@shared/api';
import { Spinner, Table, TableHeader } from '@shared/ui';

const CabinList = memo(function CabinsList() {
  const { data: cabins } = useQuery({
    queryFn: cabinApi.getAll,
    queryKey: ['cabins'],
  });

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
