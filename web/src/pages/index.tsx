import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import Link from 'next/link';


// Components
import styles from '../components/styles/landing.module.css';
import Nav from '../components/general/Menu';
import Footer from '../components/general/Footer';

export default () => {
  return (
    <>
      <title>Pebblo</title>
      <div className={styles.background}>
        <img src="images/svg/woman-on-mountain.svg"/>
      </div>
      <div className={styles.landing}>
          <span>Share your story on</span>
          <button>Pebblo</button>
          <Link href="/create"><a href="/create">Get Started</a></Link>
      </div>

      <div className={styles.content}>
        <div className={styles.staff}>
          <h1 className={styles.staff_title}>Meet The Leaders</h1>
            <div className={styles.staff_content}>

              <Link href="/kyle"><a href="/kyle" className={styles.staff_item}>
                <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_06da1348747ccf95702dd8f19668244a.gif?size=1024" alt=""/>
                <span>@kyle</span>
              </a></Link>
              <Link href="/andre"><a href="/andre" className={styles.staff_item}>
                <img src="https://cdn.discordapp.com/avatars/215302985826304010/5cac5182f4bddbb0f2a659677efaad9f.png?size=1024" alt=""/>
                <span>@andre</span>
              </a></Link>
              <Link href="/UponAnonymous"><a href="/UponAnonymous" className={styles.staff_item}>
                <img src="https://cdn.discordapp.com/avatars/253544423110082589/f28e1b06f5afb566d14a9cf77245bd5a.png?size=1024" alt=""/>
                <span>@UponAnonymous</span>
              </a></Link>

            </div>
        </div>

      <Footer />
      </div>

      <Nav/>
    </>
  )
}