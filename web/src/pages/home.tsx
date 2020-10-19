import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Nav';
import Upload from '../components/general/Upload';

export default () => {
  return (
    <>
    <title>Home</title>
      <Upload/>
      <Nav/>
    </>
  )
}