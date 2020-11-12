import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import Link from 'next/link';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Menu';
import Footer from '../components/general/Footer';

export default () => {
  const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
  
  return (
    <>
      <title>Pebblo</title>
      <div className={styles.background}>
        <img src="images/svg/woman-on-mountain.svg"/>
      </div>
      <div className={styles.landing}>
          <span>Share your story on</span>
          <button>Pebblo</button>
          <Link href="/create"><a href="/create">Get Started</a></Link>
          { loggedIn ? '' : 
          <Link href="/login"><a href="/login" className={styles.landing_login}>Already have an account?</a></Link>
           }
      </div>

      <div className={styles.content}>
        <Footer />
      </div>

      <Nav/>
    </>
  )
}