import Nav from '../components/navbar';
import MsgUI from '../components/messagesui';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (!logged && process.browser) Router.replace('/login');
  return (
    <div>
      <MsgUI />
    </div>
  )
}

export default Page;