import Router from 'next/router';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import { useEffect } from 'react';

export default function Page() {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(loggedIn && process.browser) {
    core.accounts.helpers.resetData();
    return Router.push('/');
  }
  
  useEffect(() => {
      if(!loggedIn && process.browser) {
        core.accounts.helpers.resetData();
        Router.push('/login')
      }
  }, []);

  return (null)
}