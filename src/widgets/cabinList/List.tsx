import { CabinRow } from '@entities/cabin';
import { RemoveCabinButton } from '@features/removeCabin';
import { cabinApi } from '@shared/api';
import { UISpinner, UITableComponents } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';

const { UITable, UITableHeader } = UITableComponents;

const List = memo(function CabinsList() {
  const { data: cabins } = useQuery({
    queryFn: cabinApi.getAll,
    queryKey: ['cabins'],
  });

  if (!cabins?.length) {
    return <UISpinner />;
  }

  return (
    <UITable role={'table'}>
      <UITableHeader role={'rowheader'}>
        <div />
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div />
      </UITableHeader>
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
              <RemoveCabinButton cabinId={id} />
            </CabinRow>
          )
        )}
    </UITable>
  );
});

export default List;
