import { MouseEventHandler, useCallback, useState } from 'react';
import { CabinList } from '@widgets/CabinList';
import { CreateCabinForm } from '@features/createCabin';
import { Button, Row } from '@shared/ui';
import CabinsHeader from './CabinsHeader';

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  }, []);

  return (
    <>
      <CabinsHeader />
      <Row>
        <CabinList />

        <Button onClick={handleShowForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm onCancel={handleShowForm} />}
      </Row>
    </>
  );
};

export default Cabins;
