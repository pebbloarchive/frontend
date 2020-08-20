import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../actions/utils';
import styles from '../components/styles/navbar.module.css';

// components
import Nav from '../components/general/Nav'
import Profile from '../components/general/Profile'
import Feed from '../components/general/Feed'

export default () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <>
        <Profile />
        <Feed />
        <Nav />
    </>
  )
}