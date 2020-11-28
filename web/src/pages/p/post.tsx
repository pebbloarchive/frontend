import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';
import Link from 'next/link';


// Components
import styles from '../../components/styles/support.module.css';
import Nav from '../../components/general/Nav';
import Post from '../../components/general/profile/Post/Single';
import Head from 'next/head';

const Resources = () => {
  return (
    <>
      <Head>
        <title>[BETA] Single Post</title>
      </Head>
      <Post/>
      <Nav/>
    </>
  )
}

export default Resources;