import Router from 'next/router';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import { useEffect } from 'react';
import { resetData } from '@pebblo/core/lib/controllers/accounts/account.helpers';

export default function Page() {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  
  useEffect(() => {
    if(process.browser) {
      if(!loggedIn) {
        Router.push('/login');
        resetData();
      }
      // else if(loggedIn) Router.push('/explore');
    }
  });

  return (null)
}