import Router from 'next/router'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useEffect } from 'react';
import Login from '../pages/login';

export default () => {
  const [loggedIn, cache] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);

  useEffect(() => {
    if(process.browser) {
      if(!loggedIn) Router.push('/login');
      if(loggedIn) Router.push(`/${cache.username}`);
    }
  }, []);
  return(null)
}