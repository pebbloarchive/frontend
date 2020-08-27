import React, { useEffect } from 'react';
import '../components/styles/main.css';
import { AppProps } from 'next/app';
import core from '@pebblo/core'
import { Log } from '../components/utils'
import { usePulse } from 'pulse-framework';

const Pebblo = ({ Component, pageProps }: AppProps) => {
  const [loggedIn] = [core.accounts.state.IS_LOGGED];

  useEffect(() => {
    console.log(loggedIn)
    if(!loggedIn) {
      try {
        core.accounts.helpers.refreshUser();
      } catch(err) {
        core.accounts.helpers.resetData();
      }
    }
  });


  return <Component {...pageProps} />
}

export default Pebblo;