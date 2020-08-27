import Router from 'next/router';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';

export default function Page() {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(loggedIn && process.browser) {
    core.accounts.helpers.resetData();
    return Router.push('/');
  }
  if(!loggedIn && process.browser) return Router.push('/');
  return (
    <p>Hey</p>
  )
}