import React, { useState } from 'react';
import Router from 'next/router'
import { getAvatar, Log } from '../components/utils';
import Link from 'next/link';
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';


// Components
import styles from '../components/styles/landing.module.css';
import Footer from '../components/general/Footer';
import Nav from '../components/general/Menu';
import { useTheme } from 'next-themes';

const Index = () => {
  const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
  
  return (
    <>
      <title>Pebblo - Share Your Story</title>
      <Nav/>

      <section className={styles.landing}>
        <header className={styles.landing_content}>
          <h1 className={styles.landing_content_heading}>One step closer to <Link href=""><a href="">safe</a></Link> and <Link href=""><a href="">easier</a></Link> ways of sharing</h1>
            { loggedIn ?
              <ul className={styles.landing_content_button}>
                <li><Link href="#about" as="#about"><a href="#about" className={styles.landing_content_button_two}>Our Goal</a></Link></li>
                <li><Link href="/explore"><a href="/explore" className={styles.landing_content_button_one}>Explore Pebblo</a></Link></li>
              </ul>
            :
              <ul className={styles.landing_content_button}>
                <li><Link href="#about" as="#about"><a href="#about" className={styles.landing_content_button_two}>Our Goal</a></Link></li>
                <li><Link href="/create"><a href="/create" className={styles.landing_content_button_one}>Get Started</a></Link></li>
              </ul>
            }
        </header>
          <section className={styles.landing_images}>
            <img className={styles.landing_images_one} src="/images/background-percent05.png" alt=""/>
            <img className={styles.landing_images_two} src="/images/background-percent10.png" alt=""/>
            <img className={styles.landing_images_three} src="/images/background-percent10.png" alt=""/>
            <img className={styles.landing_images_four} src="/images/background-percent05.png" alt=""/>
            <img className={styles.landing_images_five} src="/images/background-percent010.png" alt=""/>
            <img className={styles.landing_images_full} src="/images/svg/man-computer-desk.svg" alt=""/>
          </section>
            <Link href="#about" as="#about"><a href="#about" className={styles.landing_mouse}><span>Our Goal</span></a></Link>
      </section>
      
      <section id="about" className={styles.landing_about}>
        <header className={styles.landing_about_start}>
          <h1 className={styles.landing_about_start_heading}>Since <span>October 2019</span>, <br/> we have been creating <br/> Pebblo <span>just for you</span></h1>
        </header>
            <section className={styles.landing_about_goal}>
              <h1 className={styles.landing_about_goal_title}>What's our Goal?</h1>
                <p>Here at Pebblo, we have been working on a social media platform to make a safe and better experience for everyone. We are a dedicated team of developers that want to make Pebblo as secure and up to date as possible so you can enjoy your time on our Platform.</p>
                <p>All of us at Pebblo listen to our community and give them a chance to provide feedback about Pebblo to ensure that we make it an enjoyable platform for all users.</p>
                <p>Our team makes sure that you'll always get the best experience and support where needed. Send us a message and let us know your issue.</p>
            </section>
      </section>
    </>
  )
}

Index.theme = 'light';
export default Index;