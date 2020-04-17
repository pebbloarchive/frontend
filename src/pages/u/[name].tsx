import { useRouter } from 'next/router';
import { Account } from '../../core';

const Page = () => {
  const router = useRouter();
  const { name } = router.query;
  return ( <p>{name}</p> )
}

export default Page;