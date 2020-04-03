import { usePulse } from 'pulse-framework';
import { AccountData } from '../../core/controllers/account/account.state';
import { Account } from '../../core';
import Router from 'next/router';
import Head from 'next/head';
import Logger from '../../modules/logger';
import { useState, useEffect } from 'react';

const Login = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const Login = async (app) => {
        app.preventDefault();
        if(!email || !password) return;
        const logged = await Account.login(email, password);
        Logger.msg('Authenticate', 'Trying to login');
        if(logged.success) return Router.push('/explore');
    }
    useEffect(() => {
        if(logged) Router.replace('/explore');
    })
    return (
    <>
        <Head>
            <title>Pebblo Login</title>
            <link rel="shortcut icon" href="https://assets.pebblo.org/images/icon/tab.png" />
        </Head>
        <div className="lr-sidebar">
            <h1 className="lr-sidebar-heading">Login <span>Hello! Let's get started.</span></h1>
        </div>
            <div className="lr">
                <div className="lr-content">
                    <form onSubmit={Login} className="lr-form">
                        <input
                            type="email"
                            name="login_email"
                            placeholder="email"
                            required
                            value={email}
                            onChange={(change) => { setEmail(change.target.value) }}
                        />
                        <input
                            type="password"
                            name="login_password"
                            placeholder="password"
                            required
                            value={password}
                            onChange={(change) => { setPassword(change.target.value) }}
                        />
                    </form>
                    <div className="lr-signin">
                    <button onClick={Login}>Login</button>
                    </div>
                </div>
            </div>
            <a href="/create" className="lr-signup">Don't have an account? <span>Create</span></a>
        </>
    )
}

export default Login;
