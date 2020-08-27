import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import styles from '../components/styles/navbar.module.css';

// components
import Nav from '../components/general/Nav'
import Profile from '../components/user/Profile'
import Feed from '../components/general/Feed'

export default () => {
  return (
    <>
        <Profile />
        <Feed />
        <Nav />
    </>
  )
}