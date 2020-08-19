import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../actions/utils';
import styles from '../components/styles/landing.module.css';

export default () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  return (
    <>
      <div className={styles.landing}>

        <div className={styles.wallpaper}>
          <div className={styles.wallpaper_bar}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.landing_content}>
          <h1>
            A new way to Share Your Story
          </h1>
          <p>Attracting people from around the world together.</p>
          <a href="/create">Start Your Journey!</a>
        </div>
        <div className={styles.landing_phone}></div>
      </div>

      <div className={styles.content}>
        
        <div className={styles.how}>
          <h1>What can you do?</h1>
          <p>There are a lot of exciting stuff going on that we would love for you to enjoy, here are a few.</p>

            <div className={styles.how_item}>
              <img src="/images/share-gradient.png" alt=""/>
              <h1><span>1.</span> Share Posts</h1>
              <p>Share your favourite posts on your profile or to your friends.</p>
            </div>
            <div className={styles.how_item}>
              <img src="/images/gift-gradient.png" alt=""/>
              <h1><span>2.</span> Gain Rewards</h1>
              <p>Earn rewards and unlock special features on your account.</p>
            </div>
            <div className={styles.how_item}>
              <img src="/images/messages-gradient.png" alt=""/>
              <h1><span>3.</span> Communicate</h1>
              <p>Communicate with your friends and comment on peoples posts.</p>
            </div>
        </div>

        <a href="/login" className={styles.login}>
          <img src="/images/login.png" alt=""/>
        </a>

      </div>
    </>
  )
}