import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../components/styles/navbar.module.css';

// components
import Nav from '../components/general/Nav'
import Profile from '../components/user/Profile'
import Feed from '../components/general/Feed'

export default () => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(!loggedIn && process.browser) return Router.push('/');
  return (
    <>
        <Profile />
        <Feed />
        <Nav />
    </>
  )
}