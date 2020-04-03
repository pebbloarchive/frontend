import Router from 'next/router';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { usePulse } from 'pulse-framework';
import { AccountData } from '../../core/controllers/account/account.state';
import { Account } from '../../core';
import Logger from '../../modules/logger';

const Register = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [samePassword] = useState(undefined);
    const Login = async (app) => {
        app.preventDefault();
        if(!email || !password) return;
        const logged = await Account.register(email, username, password, samePassword);
        Logger.info('Authenticate', 'Logging in successfully');
        if(logged.success) return Router.push('/explore');
    }
    useEffect(() => {
        if(logged) Router.replace('/explore');
    })
    return (
        <Head>
            <title>Pebblo Signup</title>
            <link rel="icon" href="../tab.ico" />
        </Head>
        // <style jsx>{`
            
        // `}</style>
    )
}

export default Register;
