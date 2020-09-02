import Router from 'next/router'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useEffect } from 'react';
import Login from '../pages/login';

export default () => {
  const [loggedIn, cache] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);

  if(loggedIn && process.browser) return Router.replace(`/${cache.username}`);

  useEffect(() => {
    if(!loggedIn && process.browser) Router.push('/login');
  }, []);

  return(null)

}