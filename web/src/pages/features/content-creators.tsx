import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';
import Link from 'next/link';


// Components
import Content from '../../components/general/Features/Creators'
import Footer from '../../components/general/Footer';
import Nav from '../../components/general/Menu';

export default () => {
  return (
    <>
    <title>Content Creators | Pebblo</title>
      <Content/>
      <Nav/>
      <Footer/>
    </>
  )
}