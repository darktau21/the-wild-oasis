import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { DeleteCabin } from '@features/deleteCabin';
import { CabinRow } from '@entities/cabin';
import { type Cabin, cabinApi } from '@shared/api';
import { Spinner, Table, TableHeader } from '@shared/ui';

const CabinList = () => {
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
          ({ id, name, imageURL, maxCapacity, regularPrice, discount }) => (
            <CabinRow
              key={id}
              name={name}
              maxCapacity={maxCapacity}
              regularPrice={regularPrice}
              discount={discount}
              deleteButton={<DeleteCabin cabinId={id} />}
              imageURL={imageURL}
            />
          )
        )}
    </Table>
  );
};

export default CabinList;
