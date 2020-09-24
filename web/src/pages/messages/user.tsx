import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import styles from '../../components/styles/landing.module.css';
import Nav from '../../components/general/Nav';
import Contacts from '../../components/messages/Nav'
import Messages from '../../components/messages/Contact'

export default () => {
  return (
    <>
    <title>(1) @kyle</title>

      <Nav/>
      <Contacts/>
      <Messages/>
    </>
  )
}