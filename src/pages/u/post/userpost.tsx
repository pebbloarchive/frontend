import Nav from '../../../components/Nav';
import UserPost from '../../../components/UserPosts';
import Router from 'next/router'
import { Account } from '../../../core';
import { Log } from '../../../utils';
import { usePulse } from 'pulse-framework';

const Page = () => {
  // const [followingPosts] = usePulse([PostCollection.getGroup('following')]);
  // const [logged] = usePulse(Account.isUserLoggedIn);
  // if (!logged && process.browser) Router.replace('/login');

  return (
    <>
      <Nav />
      <UserPost />
    </>
  )
}
export default Page;
