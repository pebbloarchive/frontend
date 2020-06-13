import Head from 'next/head';
import Nav from '../../components/navbar';
import Settings from '../../components/Settings';
import Connectionssetting from '../../components/settings/Security';
import Router from 'next/router'
import { Account } from '../../core';
import { AccountData } from '../../core/controllers/account/account.state';
import { usePulse } from 'pulse-framework';
import styles from '../../styles/components/settings.module.css';

const Page = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    const [username] = usePulse([AccountData.username]);
    const [email] = usePulse([AccountData.email]);
    if(!logged && process.browser) Router.replace('/login');

    return (
        <>
        <Head>
            <title>Pebblo Settings</title>
        </Head>
        <Nav />
        <Settings />
        <Connectionssetting />
        </>
    )
}

export default Page;
