import { useQuery } from '@tanstack/react-query';
import { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import { CabinList } from '@widgets/CabinList';
import { CreateCabinForm } from '@features/createCabin';
import { Cabin, cabinApi } from '@shared/api';
import { Button, Heading, Row, Spinner } from '@shared/ui';

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);

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
        {status === 'loading' ? <Spinner /> : null}
        {status === 'success' ? <CabinList /> : null}

        <Button onClick={handleShowForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm onCancel={handleShowForm} />}
      </Row>
    </>
  );
};

export default Cabins;
