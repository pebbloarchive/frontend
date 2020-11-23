import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';
import Link from 'next/link';


// Components
import Content from '../../components/general/Features/Pebblo'
import Footer from '../../components/general/Footer';
import Nav from '../../components/general/Menu';

const Branding = () => {
  return (
    <>
    <title>Branding | Pebblo</title>
      <Content/>
      <Nav/>
      <Footer/>
    </>
  )
}

Branding.theme = 'light';
export default Branding;