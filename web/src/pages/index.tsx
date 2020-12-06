import Link from 'next/link';
import Nav from '@pebblo/frontend/src/components/general/Menu';
import Footer from '@pebblo/frontend/src/components/general/Footer';
import styles from '@pebblo/css/landing.module.css';
import { useAuth } from '../hooks/useAuth';
import { withApollo } from '../hooks/withApolloHook';
import { useQuery } from '@apollo/client';
import { useMeQuery } from '../generated/graphql';

const Index = () => {
  // TODO: get user from cache.
  const loggedIn = useAuth();
  const { data } = useMeQuery();

  return (
    <>
      <title>Pebblo</title>
      <Nav/>
    </>
  )
}

Index.theme = 'light';
export default withApollo({ ssr: false })(Index);
