import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import styles from '../../components/styles/landing.module.css';
import Nav from '../../components/general/Nav';
import Contacts from '../../components/messages/Nav'

export default () => {
  return (
    <>
    <title>Messages</title>

      <Nav/>
      <Contacts/>
    </>
  )
}