import { useQuery } from '@tanstack/react-query';
import { MouseEventHandler, useCallback, useState } from 'react';
import { CabinList } from '@widgets/CabinList';
import { CreateCabinForm } from '@features/createCabin';
import { cabinApi } from '@shared/api';
import { Button, Heading, Row } from '@shared/ui';

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  const { data: cabins } = useQuery({
    queryFn: cabinApi.getAll,
    queryKey: ['cabins'],
  });

  const handleShowForm: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  }, []);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinList cabins={cabins} />

        <Button onClick={handleShowForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm onCancel={handleShowForm} />}
      </Row>
    </>
  );
};

export default Cabins;
