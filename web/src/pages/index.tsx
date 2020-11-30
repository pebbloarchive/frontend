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
import { useTheme } from 'next-themes';

const Index = () => {
  const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
  
  return (
    <>
      <title>Pebblo</title>
      <div className={styles.background}>
        <img src="images/svg/woman-on-mountain.svg"/>
      </div>
      <div className={styles.landing}>
          <span>Share your story on</span>
          <i>Pebblo</i>
          { loggedIn ?
          <div>
            <Link href="/explore"><a href="/explore">Explore Pebblo</a></Link>
            <Link href="/andre"><a href="/andre" className={styles.landing_login}>My Profile</a></Link>
          </div>
          :
          <div className={styles.landing_links}> 
            <Link href="/features"><a href="/features">New to Pebblo?</a></Link>
            <Link href="/login"><a href="/login" className={styles.landing_login}>Have an account?</a></Link>
          </div>
          }
      </div>

      <div className={styles.content}>
        <Footer />
      </div>

      <Nav/>
    </>
  )
}

Index.theme = 'light';
export default Index;