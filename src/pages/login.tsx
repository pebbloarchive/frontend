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
    <title>Login</title>
          <div className={styles.wallpaper}>
            <div className={styles.wallpaper_bar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        <div className={styles.login_content}>
            <form>
              <input type="email" name="" id="" placeholder="Email Address" required/>
              <input type="password" name="" id="" placeholder="Password" required/>

                  <a href="" className={styles.trouble}>Having trouble logging in?</a>
                
              <input className={styles.login_button} type="submit" value="Login"/>

            <a className={styles.login_alternative} href="">Log in with <strong>Google</strong></a>
            </form>
        </div>
    </>
  );
}

export default Page;