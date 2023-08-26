import { CreateCabinForm } from '@features/createCabin';
import { getCabins } from '@shared/api';
import { Button, Heading, Row, Spinner } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { CabinList } from '@widgets/CabinList';
import { MouseEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  const { status, data: cabins } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    },
  });

  const handleShowForm: MouseEventHandler = () =>
    setShowForm((prevState) => !prevState);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        {status === 'loading' ? <Spinner /> : null}
        {status === 'success' ? <CabinList cabins={cabins} /> : null}

        <Button onClick={handleShowForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
