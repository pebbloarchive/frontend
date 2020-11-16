import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Nav';
import Upload from '../components/general/Upload';
import Feed from '../components/general/profile/Feed';

export default () => {
  return (
    <>
    <title>Upload</title>
      <Upload/>
      <Feed/>
      <Nav/>
    </>
  )
}