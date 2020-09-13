import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import styles from '../../components/styles/landing.module.css';
import Nav from '../../components/messages/Nav';
import Contact from '../../components/messages/Contact'

export default () => {
  return (
    <>
    <title>(1) @kyle</title>
      <Contact />
      <Nav/>
    </>
  )
}