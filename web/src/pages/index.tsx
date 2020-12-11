import React, { useState } from 'react';
import Router from 'next/router'
import { getAvatar, Log } from '../components/utils';
import Link from 'next/link';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';


// Components
import styles from '../components/styles/landing.module.css';
import Footer from '../components/general/Footer';
import { useTheme } from 'next-themes';

const Index = () => {
  const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
  
  return (
    <>
      <title>Pebblo - Share Your Story</title>
      <nav className={styles.navbar}>
        <Link href="/"><a href="/" className={styles.logo}>
          <span></span>
          <span></span>
          <span></span>
        </a></Link>
          <section className={styles.links}>
            <Link href="#goal"><a href="#goal" as="goal">Our Goal</a></Link>
            {/* <Link href=""><a href="">Blog</a></Link> */}
            <Link href="/privacy"><a href="/privacy">Privacy Policy</a></Link>
            <Link href="/terms"><a href="/terms">TOS</a></Link>
            { loggedIn ?
              <div>
                <Link href="/login"><a href="/login" className={styles.links_buttonOne}>Hello, <span>@andre</span></a></Link>
              </div> :
              <div>
                <Link href="/login"><a href="/login" className={styles.links_buttonOne}>Login</a></Link>
                <Link href="/create"><a href="/create" className={styles.links_buttonTwo}>Create</a></Link>
              </div> }
          </section>
      </nav>

        <div className={styles.landing}>
            <section className={styles.services}>
              <Link href="/explore"><a href="/explore"><li className={styles.services_item}>
                <img src="/icons/hashtag-color.png" alt=""/>
                <h1 className={styles.services_item_title}>Browse</h1>
                <p className={styles.services_item_desc}>It's a great day to go exploring! Why not spend some time on Pebblo.</p>
              </li></a></Link>
              <li className={styles.services_item}>
                <img src="/icons/reload-color.png" alt=""/>
                <h1 className={styles.services_item_title}>Updates</h1>
                <p className={styles.services_item_desc}>We're always making little updates on Pebblo for a better experience.</p>
              </li>
              <Link href="/undefined/settings/display"><a href="/undefined/settings/display"><li className={styles.services_item}>
                <img src="/icons/dropper-color.png" alt=""/>
                <h1 className={styles.services_item_title}>Themes</h1>
                <p className={styles.services_item_desc}>Personalize Pebblo how you want, with our custom themes.</p>
              </li></a></Link>
              <li className={styles.services_item}>
                <img src="/icons/database-color.png" alt=""/>
                <h1 className={styles.services_item_title}>Security</h1>
                <p className={styles.services_item_desc}>At Pebblo we make sure your data stays within our database.</p>
              </li>
            </section>
          <div className={styles.landing_left}>
            <div className={styles.landing_left_content}>
              <h1 className={styles.landing_left_header}>Share. Your. <br/> Story.</h1>
              <p className={styles.landing_left_desc}>Attracting people from around the world together to share stories.</p>
            </div>
          </div>
        </div>
        <div className={styles.content} id="features">
        <section className={styles.about} id="about">
          <div className={styles.about_content}>
            <h1>Since <span>October 2019</span> <br/> we have been creating <br/> <span>Pebblo just for you</span>.</h1>
          </div>
        </section>
        <section className={styles.goal} id="goal">
          <h1 className={styles.goal_title}>What is our Goal?</h1>
          <div className={styles.goal_desc}>
            <p>
              Here at Pebblo, we have been working on a social media platform to make a safe and better experience for everyone. We are a dedicated team of developers that want to make Pebblo as secure and up to date as possible so you can enjoy your time on our Platform.
            </p>
            <p>
              At Pebblo, we want to listen to our community and give them a chance to help us create something unique, something that you will enjoy.
            </p>
          </div>
        </section>
      </div>

      <Footer/>
    </>
  )
}

Index.theme = 'light';
export default Index;