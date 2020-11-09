import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import Nav from '../../components/general/Nav';
import Explore from '../../components/explore/Explore'

export default () => {
  return (
    <>
    <title>Explore Pebblo</title>
      <Explore/>
      <Nav/>
    </>
  )
}
