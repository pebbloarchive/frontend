import React, { useState } from 'react';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import styles from '../styles/components/landing.module.css';
import nav from '../styles/components/navbar.module.css';

export default () => {
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
      <div className={styles.side}>
      </div>

      <div className={styles.content}>
        <h1 className={styles.slogan}>Share your story with the world</h1>
        
          <form className={styles.register}>
            <div className={styles.email}>
              <h1>Register using your email</h1>
              <input type="email" name="" id="" placeholder="hello@pebblo.org" required />
            </div>

            <input className={styles.submit} type="submit" value="Next"/>
          </form>
      </div>

      <div className={nav.navbar}>
        <h1>pebblo</h1>
        <a href="">Features</a>
        <a href="">Support</a>
        <a href="">Safety</a>
        <a href="/login">Login</a>
      </div>
    </>
  )
}