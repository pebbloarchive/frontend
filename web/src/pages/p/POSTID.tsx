import React, { useState } from 'react';
import Router from 'next/router'
import styles from '../../components/styles/navbar.module.css';

// components
import Nav from '../../components/general/Nav'
import Feed from '../../components/general/Posts'

export default () => {
  return (
    <>
        <Feed />
        <Nav />
    </>
  )
}
