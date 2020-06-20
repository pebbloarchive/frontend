import { useRouter } from 'next/router';
import { Account } from '../../../core';

const Page = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return ( <p>{slug}</p> )
}

export default Page; // oh hi there