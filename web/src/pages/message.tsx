import { useState } from 'react';
import Head from 'next/head';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import Router from 'next/router';

// Components
import NotFound from './404';
import Nav from '../components/general/Nav'
import Posts from '../components/general/Posts';
import Suspended from '../components/general/Suspended';
// import styles from '../components/styles/message.module.css';

const Page = () => {
  return (
    <>
      <Nav/>
    </>
  )
} 

export default Page;