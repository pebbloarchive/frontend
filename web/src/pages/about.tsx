import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import Link from 'next/link';


// Components
import styles from '../components/styles/support.module.css';
import Nav from '../components/general/Menu';
import Footer from '../components/general/Footer';

export default () => {
  return (
    <>
      <title>Pebblo - About Us</title>

      <Footer />
      <Nav/>
    </>
  )
}