import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import Head from 'next/head';
import styles from '../styles/components/auth.module.css';

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
        <div className={styles.lr_sidebar}>
            <h1 className={styles.lr_sidebar_heading}>Login <span>Hello! Let's get started.</span></h1>
      <a href="/" className={styles.lr_home}>
        <img src="https://cdn.discordapp.com/attachments/596156721928470547/726229498831306792/chevron-left.png" alt=""/>
      </a>
        </div>
            <div className={styles.lr}>
                <div className={styles.lr_content}>
                    <form onSubmit={doLogin} className={styles.lr_form}>
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
                    <div className={styles.lr_signin}>
                        <input type="submit" value="Login"/>
                    </div>
                    </form>
                </div>
            </div>
            <a href="/create" className={styles.lr_signup}>Don't have an account? <span>Create</span></a>
    </>
  );
}

export default Page;