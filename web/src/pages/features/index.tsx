import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';
import Link from 'next/link';


// Components
import Content from '../../components/general/Features/Pebblo'
import Footer from '../../components/general/Footer';
import Nav from '../../components/general/Menu';

const Features = () => {
  return (
    <>
    <title>Features | Pebblo</title>
      <Content/>
      <Nav/>
      <Footer/>
    </>
  )
}

Features.theme = 'light';
export default Features;