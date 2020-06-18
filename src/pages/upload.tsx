import Nav from '../components/navbar';
import Upload from '../components/upload';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';
import styles from '../styles/components/explore.module.css';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (!logged && process.browser) Router.replace('/login');
  return (
    <div>
      <Nav />
    </div>
  )
}

export default Page;