import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import styles from '../components/styles/support.module.css';

// COMPONENTS
import Nav from '../components/general/Menu'
import Footer from '../components/general/Footer'
import Head from 'next/head';

export default () => {
  return (
    <>
    <Head>
      <title>Contact us</title>
    </Head>
    <form className={styles.contact}>
      <h1 className={styles.contact_title}>Contact Us</h1>

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
          cols="30"
          rows="10"
          placeholder="Write a message..."
        />

    </form>

      <Footer />
      <Nav />
    </>
  )
}