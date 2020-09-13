import React, { useState } from 'react';
import Router from 'next/router'
import core from '@pebblo/core'
import { usePulse } from 'pulse-framework';
import styles from '../../components/styles/dash.module.css';

// components
import Nav from '../../components/dash/Nav'

export default () => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(!loggedIn && process.browser) Router.push('/');
  return (
    <>
      <title>PebDash &gt; Account Management</title>
        <div className={styles.dash}>
          <div className={styles.context}>
            <div className={styles.page_title}>Account Management</div>
          </div>
        </div>

        <Nav />
    </>
  )
}