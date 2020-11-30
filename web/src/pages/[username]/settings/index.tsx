import React, { useState } from 'react';
import Router from 'next/router'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import styles from '../../components/styles/navbar.module.css';

// components
import Nav from '../../../components/settings/Nav'
import Setting from '../../../components/settings/Profile'

export default () => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(!loggedIn && process.browser) Router.push('/');
  return (
    <>
        <Setting />
        <Nav />
    </>
  )
}