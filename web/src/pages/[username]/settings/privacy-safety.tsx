import React, { useState } from 'react';
import Router from 'next/router'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../../components/styles/navbar.module.css';

// components
import Nav from '../../../components/settings/Nav'
import Setting from '../../../components/settings/Privacy'

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