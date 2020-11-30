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
            <h1 className={styles.recovery_title}>Password Reset</h1>
            <p className={styles.recovery_message}>To reset your password, enter the email you used to create your account.</p>
              <form className={styles.recovery_form}>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  required
                />
                <input
                  type="submit"
                  name=""
                  id=""
                  value="Recovery Link"
                />
              </form>
          </div>
        </div>
    </>
  )
}

Index.theme = 'light';
export default Index;