import Link from 'next/link';
import Nav from '../components/general/Menu';
import Footer from '../components/general/Footer';
import styles from '../css/landing.module.css';
import { useAuth } from '../components/hooks/useAuth';
import { withApollo } from '../components/hooks/withApolloHook';
import { useQuery } from '@apollo/client';
import { useMeQuery } from '../generated/graphql';

const Index = () => {
  // TODO: get user from cache.
  const loggedIn = useAuth();
  const { data } = useMeQuery();

  return (
    <>
      <title>Pebblo</title>
      <div className={styles.background}>
        <img src="/images/svg/woman-on-mountain.svg"/>
      </div>
      <div className={styles.landing}>
        <span>Share your story on</span>
        <i>Pebblo</i>
         { loggedIn.me ?
          <div>
            <Link href="/explore"><a href="/explore">Explore Pebblo</a></Link>
            <Link href={`/${data?.me.username}`}><a href={`/${data?.me.username}`} className={styles.landing_login}>My Profile</a></Link>
          </div>
        :
          <div>
            <Link href="/features"><a href="/features">New to Pebblo?</a></Link>
            <Link href="/login"><a href="/login" className={styles.landing_login}>Have an account?</a></Link>
          </div>
        }
      </div>
      <div className={styles.content}>
        <Footer />
      </div>
      <Nav/>
    </>
  )
}

Index.theme = 'light';
export default withApollo({ ssr: false })(Index);
