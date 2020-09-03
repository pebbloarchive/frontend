import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import core from '@pebblo/core';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { usePulse } from 'pulse-framework';

// components
import styles from '../../components/styles/navbar.module.css';
import Nav from '../../components/settings/Nav'
import Setting from '../../components/settings/Staff'
import NotFound from '../404';

export default () => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
  console.log(current)
  useEffect(() => {
    if(process.browser) {
      if(!loggedIn) {
        <NotFound/> && Router.push('/login')
      }
      if(current && current.permissions) {
        if(!current.permissions.includes('admin')) {
          Router.replace('/login');
        }
      }
    }
  });
  return (
    <>
        <Setting />
        <Nav />
    </>
  )
}