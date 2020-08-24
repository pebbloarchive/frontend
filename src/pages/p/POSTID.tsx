import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../actions/utils';
import styles from '../../components/styles/navbar.module.css';

// components
import Nav from '../../components/general/Nav'
import  Feed from '../../components/general/Posts'

export default () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <>
        <Feed />
        <Nav />
    </>
  )
}