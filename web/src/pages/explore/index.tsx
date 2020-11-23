import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';


// Components
import styles from '../../components/styles/profile/home/content.module.css';
import Nav from '../../components/general/Nav';
import Explore from '../../components/explore/Explore';
import Feed from '../../components/explore/Feed';

export default () => {
  return (
    <>
    <title>Explore Pebblo</title>
      <Explore/>
    <div className={styles.content}>
      <Feed/>
    </div>
      <Nav/>
    </>
  )
}
