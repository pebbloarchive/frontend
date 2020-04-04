import { usePulse } from 'pulse-framework';
import { AccountData } from '../../core/controllers/account/account.state';
import { Account } from '../../core';
import Router from 'next/router';
import { Logger } from '../../modules/logger';
import { useEffect } from 'react';

const Explore = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  const [id, username] = usePulse([
    AccountData.id,
    AccountData.username
  ]);
  useEffect(() => {
    if(!logged) Router.replace('/login');
  });
return (
  <div>
      <h1>Your username is { username ? username :  'N/A' }</h1>
</div>
  )
}

export default Explore;