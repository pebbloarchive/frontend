import Head from 'next/head';
import Nav from '../components/Nav';
import Router from 'next/router'
import { Account } from '../core';
import { AccountData } from '../core/controllers/account/account.state';
import { Log } from '..//utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';

const Page = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    
    useEffect(() => {
        if(!logged) Router.replace('/login');
    });

    return (
        <>
        <Head>
        <title>Pebblo Profile</title>
        </Head>
            <div>
                
            </div>
        </>
    )
}

export default Page;