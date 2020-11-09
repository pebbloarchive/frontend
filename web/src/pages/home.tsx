import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Nav';
import Content from '../components/general/profile/home/Content';

export default () => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(!loggedIn && process.browser) Router.push('/');
  return (
    <>
    <title>Home</title>
      <Content/>
      <Nav/>
    </>
  )
}