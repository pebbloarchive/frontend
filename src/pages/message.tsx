import Nav from '../components/navbar';
import MsgNav from '../components/messagenavbar';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';
import styles from '../styles/components/messagenav.module.css';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (!logged && process.browser) Router.replace('/login');
  return (
    <div>
      <MsgNav />
    </div>
  )
}

export default Page;