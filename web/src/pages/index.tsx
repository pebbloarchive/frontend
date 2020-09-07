import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import Link from 'next/link';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Menu';

export default () => {
  return (
    <>
      <div className={styles.background}>
        <img src="images/svg/woman-on-mountain.svg"/>
      </div>
      <div className={styles.landing}>
          <span>Share your story on</span>
          <button>Pebblo</button>
          <Link href="/explore"><a href="">Learn More</a></Link>
      </div>

      <div className={styles.content}>

        

      </div>

      <Nav/>
    </>
  )
}