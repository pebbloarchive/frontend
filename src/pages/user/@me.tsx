import Head from 'next/head';
import Nav from '../../components/navbar';
import Post from '../../components/feed';
import Profile from '../../components/profiles';
import Router from 'next/router'
import { Account } from '../../core';
import { AccountData } from '../../core/controllers/account/account.state';
import { Log } from '../../utils';
import { usePulse } from 'pulse-framework';
import { PostCollection } from '../../core/controllers/posts/posts.state';
import styles from '../../styles/components/post.module.css';
import styles_profile from '../../styles/components/profile.module.css';

const Page = () => {
  const [followingPosts] = usePulse([PostCollection.getGroup('following')]);
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (!logged && process.browser) Router.replace('/login');

  return (
    <>
      <Profile/>
      <Nav />
      <div className={styles.feed}>
      <Head>
        <title>Pebblo Profile</title>
      </Head>
        {
          followingPosts.map((post) => {
            return (
              <Post {...post} />
            )
          })
        }
      </div>
    </>
  )
}
export default Page;
