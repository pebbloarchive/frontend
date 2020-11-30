import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../../components/utils';
import Link from 'next/link';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';


// Components
import styles from '../../../components/styles/auth.module.css';
import Nav from '../../../components/general/Menu';
import Footer from '../../../components/general/Footer';
import { useTheme } from 'next-themes';

const Index = () => {
  const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
  
  return (
    <>
      <title>Account Recovery</title>
        <div className={styles.recovery}>
          <div className={styles.recovery_card}>
            <h1 className={styles.recovery_title}>Email Confirmed</h1>
            <p className={styles.recovery_message}>Set your new password. We recommend not using any previous passwords.</p>
              <form className={styles.recovery_form}>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="New Password"
                  required
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Repeat Password"
                  required
                />
                <input
                  type="submit"
                  name=""
                  id=""
                  value="Set new password"
                />
              </form>
          </div>
        </div>
    </>
  )
}

Index.theme = 'light';
export default Index;