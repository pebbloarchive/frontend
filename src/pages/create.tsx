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
    <title>Sign Up</title>
      <div className={styles.background}>
      </div>
      <div className={styles.background_content}>
        <h1>Share your story with the world.</h1>
      </div>

      <div className={styles.register}>

        <form>
          <h1 className={styles.auth_title}>Sign up</h1>
            <div className={styles.register_inputs}>
            {/* REGISTER THESE STEPS AND THEN IT'LL LOGIN AND SAY SET YOUR PASSWORR */}
              <input type="text" name="" id="" placeholder="Full Name" required/>
              <input type="email" name="" id="" placeholder="Email Address" required/>
              <input type="text" name="" id="" placeholder="Username" required/>
            </div>
          <p className={styles.auth_message}>Your are agreeing to the <a href="terms">Terms of Service</a> and <a href="privacy">Privacy Policy</a></p>
          <input className={styles.auth_button} type="submit" value="Get Started"/>
          <a className={styles.auth_alternative} href="">Sign up with <span>Google</span></a>
        </form>
        
        <a className={styles.auth_alreadyGot} href="/login">
          Already have an account?
        </a>

      </div>
    </>
  );
}

export default Page;