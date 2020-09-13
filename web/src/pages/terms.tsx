import React, { useState } from 'react';
import Router from 'next/router'
import { Log } from '../components/utils';
import Link from 'next/link';


// Components
import styles from '../components/styles/support.module.css';
import Nav from '../components/general/Menu';
import Footer from '../components/general/Footer';

export default () => {
  return (
    <>
      <title>Pebblo - Terms and Conditions</title>
        <div className={styles.legal_header}>
            <section>
                <h1>Terms and Conditions</h1>
                <p><span>Lasted updated on,</span> 10 September 2020</p>
            </section>
        </div>

        <div className={styles.legal}>


        </div>

        <Footer />

      <Nav/>
    </>
  )
}