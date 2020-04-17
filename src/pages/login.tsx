import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import Head from 'next/head';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (logged && process.browser) Router.replace('/explore');
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const doLogin = async (ev) => {
    ev.preventDefault();
    if (!email) return;
    if (!password) return;
    const logged = await Account.login(email, password);
    Log('Application', 'Logging in');
    if (logged.success) return Router.push('/explore');
  }
  return (
    <>
        <div className="lr-sidebar">
            <h1 className="lr-sidebar-heading">Login <span>Hello! Let's get started.</span></h1>
        </div>
            <div className="lr">
                <div className="lr-content">
                    <form onSubmit={doLogin} className="lr-form">
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
                    <div className="lr-signin">
                        <input type="submit" value="Login"/>
                    </div>
                    </form>
                </div>
            </div>
            <a href="/create" className="lr-signup">Don't have an account? <span>Create</span></a>
    </>
  );
}

export default Page;