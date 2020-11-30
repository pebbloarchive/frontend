import React, { useState } from 'react';
import Router from 'next/router'
import styles from '../../components/styles/navbar.module.css';

// components
import Nav from '../../../components/settings/Nav'
import Setting from '../../../components/settings/Connections'

export default () => {
  return (
    <>
        <Setting />
        <Nav />
    </>
  )
}