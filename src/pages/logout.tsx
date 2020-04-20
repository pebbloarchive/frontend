import { usePulse } from 'pulse-framework';
import { AccountData } from '../core/controllers/account/account.state';
import { Account } from '../core';
import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import styles from '../styles/components/auth.module.css'

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  const [username] = usePulse([AccountData.username])
  const logout = async () => {
    await Account.logout(true);
    Router.replace('/login');
  }

  if(!logged && process.browser) Router.replace('/login');
  return (
    <div className={styles.logout_landing}>
      <Head>
      <title>Pebblo Profile</title>
      </Head>
      <div className={styles.logout}>
        <h1 className={styles.logout_title}>Log out</h1>
        <p className={styles.logout_message}>Are you sure you want to log out of <span>{ username }</span>?</p>
        <a href="explore" className={` ${styles.logout_btn} ${styles.logout_1} `}>Cancel</a>
        <button onClick={ logout } className={` ${styles.logout_btn} ${styles.logout_2} }`}>Log out</button>
      </div>
    </div>
  )
}

export default Page;