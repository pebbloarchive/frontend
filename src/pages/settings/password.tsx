import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../actions/utils';
import styles from '../components/styles/navbar.module.css';

// components
import Nav from '../../components/general/settings/Nav'
import Setting from '../../components/general/settings/Password'
export default () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <>
        <Setting />
        <Nav />
    </>
  )
}