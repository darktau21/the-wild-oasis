import { getCabins } from '@shared/api';
import { Heading, Row, Spinner } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { CabinList } from '@widgets/CabinList';

const Cabins = () => {
  const {
    status,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  console.log(cabins);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        {status === 'loading' ? <Spinner /> : null}
        {status === 'success' ? <CabinList cabins={cabins} /> : null}
      </Row>
    </>
  );
};

export default Cabins;
