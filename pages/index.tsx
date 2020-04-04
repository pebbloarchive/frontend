import React from 'react';
import { usePulse } from 'pulse-framework';
import { Account } from '../core';
import { Logger } from '../modules/logger';
import Router from 'next/router';
import Head from 'next/head';

const Home = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  React.useEffect(() => {
    if(!logged) Router.replace('/login');
    else if (logged) Router.replace('/explore');
  });
  return ( 
    <>
      <Head>
      <title>Pebblo</title>
      </Head>
    </>
  )
}

export default Home;