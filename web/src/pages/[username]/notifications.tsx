import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import styles from '../../components/styles/landing.module.css';
import Nav from '../../components/general/Nav';
import Follows from '../../components/general/notifications/Follows';

export default () => {
  return (
    <>
    <title>Notifications</title>

      <Follows/>
      <Nav/>
    </>
  )
}