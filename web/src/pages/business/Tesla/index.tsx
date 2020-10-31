import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../../components/utils';
import Link from 'next/link';


// Components
import Content from '../../../components/general/business/Home';
import Profile from '../../../components/general/business/Ui';
import Nav from '../../../components/general/business/Nav';

export default () => {
  return (
    <>
    <title>Tesla | Pebblo</title>
      <Profile/>
      <Content/>
      <Nav/>
    </>
  )
}