import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../../components/utils';
import Link from 'next/link';


// Components
import styles from '../../components/styles/support.module.css';
import Nav from '../../components/general/Menu';
import Footer from '../../components/general/Footer';
import Head from 'next/head';

export default () => {
  return (
    <>
    <Head>
      <title>Pebblo - Resources</title>
    </Head>
      <div className={styles.heading}>
        <form>
          <h1>Search for Resources</h1>
          <section>
            <input
              type="search"
              name=""
              id=""
              placeholder="Enter a keyword..."
            />
            <input type="submit" value="GO"/>
          </section>
        </form>
      </div>

      <div className={styles.categories}>
        <h3>or <strong>Suggested</strong> categories</h3>
          
          <div className={styles.categories_list}>
            <Link href="/contact"><a href="/contact" className={styles.categories_item}>
              <section>
                <h1>Assistance</h1>
                <p>Have a problem using a feature? Contact us.</p>
              </section>
            </a></Link>
            <Link href="/blog/user-guide"><a href="/blog/user-guide" className={styles.categories_item}>
              <section>
                <h1>User Guides</h1>
                <p>Use our "user guide" to help you throughout your journey.</p>
              </section>
            </a></Link>
            <Link href="/jobs/"><a href="/jobs" className={styles.categories_item}>
              <section>
                <h1>Jobs</h1>
                <p>We would love for you to help out, see some open positions.</p>
              </section>
            </a></Link>
            <Link href="/blog/safety"><a href="/blog/safety" className={styles.categories_item}>
              <section>
                <h1>Safety</h1>
                <p>Want to learn how to keep safe while using Pebblo?</p>
              </section>
            </a></Link>
          </div>
      </div>

      <Footer/>
      <Nav/>
    </>
  )
}