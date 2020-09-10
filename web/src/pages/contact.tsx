import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import styles from '../components/styles/support.module.css';

// COMPONENTS
import Nav from '../components/general/Menu'
import Footer from '../components/general/Footer'
import Head from 'next/head';
import Link from 'next/link';

export default () => {
  return (
    <>
    <Head>
      <title>Contact us</title>
    </Head>
    <form className={styles.contact}>
      <h1 className={styles.contact_title}>Contact Us</h1>
      <p className={styles.contact_note}>Please make sure you've searched through our <Link href="/resources"><a href="/resources">resources</a></Link> before contacting us.</p>

        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
        />

        <hr/>

        <select
          className={styles.contact_select}
          name=""
          id="">
            <option>General Support</option>
            <option>Report a Bug</option>
        </select>

        <textarea
          name=""
          id=""
          // cols={30}
          rows={5}
          placeholder="Write a message..."
        />

        <input type="submit" value="Submit"/>

    </form>

      <Footer />
      <Nav />
    </>
  )
}


// my terrible contact page :')