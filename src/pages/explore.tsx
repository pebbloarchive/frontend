import Head from 'next/head';
import Profile from '../components/explore/Profile';
import Feed from '../components/Feed';
import Router from 'next/router'
import { Account } from '../core';
import { AccountData } from '../core/controllers/account/account.state';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { PostCollection } from '../core/controllers/posts/posts.state';

const Page = () => {
  const [followingPosts] = usePulse([PostCollection.getGroup('following')]);
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (!logged && process.browser) Router.replace('/login');

  return (
    <>
        <Profile />
    </>
  )
}
export default Page;