import Head from 'next/head';
import Nav from '../components/Nav';
import Post from '../components/Post';
import Router from 'next/router'
import { Account } from '../core';
import { AccountData } from '../core/controllers/account/account.state';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { PostCollection } from '../core/controllers/posts/posts.state';
import styles from '../styles/components/post.module.css';

const Page = () => {
  const [followingPosts] = usePulse([PostCollection.getGroup('following')]);
  const [logged] = usePulse(Account.isUserLoggedIn);
  if(!logged && process.browser) Router.replace('/login');

  return (
    <div className={styles.feed}>
      <Head>
        <title>Pebblo Profile</title>
      </Head>
      <Nav />
      {
        followingPosts.map((post) => {
          return (
            <Post {...post} />
          )
        })
      }
    </div>
  )
}

export default Page;