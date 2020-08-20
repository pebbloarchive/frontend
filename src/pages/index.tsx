import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../actions/utils';
import styles from '../components/styles/landing.module.css';

export default () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <>
      <h1>Maintenance...</h1>
    </>
  )
}