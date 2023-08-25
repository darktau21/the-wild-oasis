import { Cabin } from '@entities/cabin';
import { CabinRow } from '@entities/cabin';
import { DeleteCabin } from '@features/deleteCabin';
import { Table, TableHeader } from '@shared/ui';

type CabinTableProps = {
  cabins: Cabin[];
};

const CabinList = ({ cabins }: CabinTableProps) => {
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
      {cabins.map(({ id, name, maxCapacity, regularPrice, discount }) => (
        <CabinRow
          key={id}
          name={name}
          maxCapacity={maxCapacity}
          regularPrice={regularPrice}
          discount={discount}
          deleteButton={<DeleteCabin cabinId={id} />}
        />
      ))}
    </Table>
  );
};

export default CabinList;
