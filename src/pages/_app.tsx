import React from 'react';
import '../components/styles/main.css';
import { AppProps } from 'next/app';
import { usePulse } from 'pulse-framework';
import { Account } from '../actions/pulse';
import Api from '../actions/pulse/api';
import { AccountData } from '../actions/pulse/controllers/account/account.state';
import { Log } from '../actions/utils';

const Pebblo = ({ Component, pageProps }: AppProps) => {
  // const [loggedIn, cached, cache] = usePulse([
  //   Account.isUserLoggedIn
  // ])
  const [loggedIn] = usePulse(Account.isUserLoggedIn);
  if(loggedIn) {
    Log('Core', 'Token refreshed')
    if(Account.data.token.isNot(undefined)) Api.config.options.headers["authorization"] = `Bearer ${AccountData.token.value}`;
  }
  return <Component {...pageProps} />
}

export default Pebblo;