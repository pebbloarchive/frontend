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
      <title>Pebblo - Share Your Story</title>
      <Nav/>
    </>
  )
}

Index.theme = 'light';
export default Index;