import { CabinRow } from '@entities/cabin';
import { DeleteCabin } from '@features/deleteCabin';
import { type Cabin } from '@shared/api';
import { TableComponents } from '@shared/ui';

const { Table, TableHeader } = TableComponents;

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
      {cabins.map(
        ({ id, name, image, maxCapacity, regularPrice, discount }) => (
          <CabinRow
            key={id}
            name={name}
            maxCapacity={maxCapacity}
            regularPrice={regularPrice}
            discount={discount}
            deleteButton={<DeleteCabin cabinId={id} />}
            image={image}
          />
        )
      )}
    </Table>
  );
};

export default CabinList;
