import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { Log } from '../actions/utils';
import Head from 'next/head';
import styles from '../components/styles/auth.module.css';

const Page = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
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
              <input type="email" name="" id="" placeholder="Email Address" required onChange={(change) => { setEmail(change.target.value) }}/>
              <input type="password" name="" id="" placeholder="Password" required onChange={(change) => { setPassword(change.target.value) }}/>

                  <a href="" className={styles.trouble}>Having trouble logging in?</a>
                
              <input className={styles.login_button} type="submit" value="Login"/>

            <a className={styles.login_alternative} href="">Log in with <strong>Google</strong></a>
            </form>
        </div>
    </>
  );
}

export default Page;