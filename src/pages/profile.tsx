import Head from 'next/head';
import Nav from '../components/general/Nav';
import Profile from '../components/user/Profile'
import Router from 'next/router'
import { Log } from '../actions/utils';

const Page = () => {
  return (
    <>
        <Profile />
        <Nav />
    </>
  )
}
export default Page;
