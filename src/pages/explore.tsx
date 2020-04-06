import Nav from '../components/Nav';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);

    useEffect(() => {
        if (!logged) Router.replace('/login');
    });

    return (
        <div>
            <Nav />
        </div>
    )
}

export default Page;