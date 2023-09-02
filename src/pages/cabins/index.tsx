import { MouseEventHandler, useCallback, useState } from 'react';
import { CabinList } from '@widgets/CabinList';
import { CreateCabinForm } from '@features/createCabin';
import { UIButton, UIRow } from '@shared/ui';
import Header from './Header';

const CabinsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  }, []);

  return (
    <>
      <Header />
      <UIRow>
        <CabinList />

        <UIButton onClick={handleShowForm}>Add new cabin</UIButton>
        {showForm && <CreateCabinForm onCancel={handleShowForm} />}
      </UIRow>
    </>
  );
};

export default CabinsPage;
