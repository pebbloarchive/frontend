import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import core from '@pebblo/core'
import { usePulse } from 'pulse-framework'
import * as Sockets from '../components/websocket';
import API from '@pebblo/core/lib/api'
import '../components/styles/main.css';
import { Log } from '../components/utils';


const Pebblo = ({ Component, pageProps }: AppProps) => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  const [loaded, isLoading] = useState(false);
  
  useEffect(() => {
    Router.events.on('routeChangeStart', () => { isLoading(true) }); 
    Router.events.on('routeChangeComplete', () => { isLoading(false) }); 
    Router.events.on('routeChangeError', () => { isLoading(false) });
  }, []);

  // useEffect(() => {
  //   if(!loggedIn) core.accounts.helpers.setHeaders();
  // });
  
  useEffect(() => {
    if(loggedIn) { 
      core.accounts.helpers.setHeaders();
      return Sockets.connectWebsockets();
    }
  });

  // useEffect(() => {
  //   if(!loggedIn) {
  //     try {
  //       Log('Core', 'Trying to refresh user data');
  //       core.accounts.helpers.refreshUser();
  //     } catch(err) {
  //       Log('Core', 'Unable to refresh user data, signing out');
  //       core.accounts.helpers.resetData();
  //     }
  //   }
  // });

  return (
    <>
    { loaded ? 'Loading...' : <Component {...pageProps} /> }
    </>
  )
}

export default Pebblo;
