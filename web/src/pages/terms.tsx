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

          
          <h1 className={styles.legal_title}>Agreement to Terms</h1>
          <h3 className={styles.legal_note}>
            These terms and Condition constitute a legally binding agreement made between you, whether personally or on behalf of an entity (you), and Pebblo, concerning your access to and use of the Pebblo (https://pebblo.org/) website as well as any related applications (the site). <hr/>
            The Site provides the following services. An online platform for users to share their life with others within the platform (Services). You agree that by accessing the site and/or services, you have read, understood, and agree to be bound by all of these Terms and Conditions. <hr/>
            If you do not agree with all of these Terms and Conditions, then you are prohibited from using the site and services and you must discontinue use immediately. We recommend that you print a copy of these Terms and Conditions for future reference.
          </h3>
          <ul className={styles.legal_unlist}>
            <li className={styles.legal_unlist_item}>
              <p>The supplemental policies set out in section <strong>06.</strong> below, as well as any supplemental terms and conditions or documents that may be posted on the site from time to time are expressly incorporated by reference.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>We may make changes to these Terms and Conditions at any time. The updated version of these Terms and Conditions will be indicated by an updated "revised" date and the updated version will be effective as soon as it is accessible. You are responsible for reviewing these Terms and Conditions to stay informed of updates. Your continued use of the site represents that you have accepted such changes.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>We may update or change the site from time to time to reflect changes to our products, our users needs and/or our business priorities.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>Our site is for people worldwide. The information provided on the site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>The site is intended for users who are at least 18 years old. If you are under the age of 18 you are not permitted to register for the site or use the services without parental permission.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>
                Additional policies which also apply to your use on the site include. <hr/>
                &mdash; Our privacy notice <Link href="/privacy" target="_blank"><a href="/privacy" target="_blank">https://pebblo.org/privacy</a></Link> which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using the site, you consent to such processing and you warrant that all data provided by you is accurate <hr/>
                &mdash; Our acceptable use policy <Link href="/policy" target="_blank"><a href="/policy" target="_blank">https://pebblo.org/policy</a></Link> which sets our permitted uses and prohibited uses of the site. When using the site you must comply with this acceptable use policy. <hr/>
                &mdash; If you purchase content from the site, our Terms and Conditions of supply <Link href="/terms" target="_blank"><a href="/terms" target="_blank">https://pebblo.org/terms</a></Link> will apply these sales.
              </p>
            </li>
          </ul>

          <h1 className={styles.legal_title}>Acceptable Use</h1>
          <ul className={styles.legal_unlist}>
            <li className={styles.legal_unlist_item}>
              <p>Our full acceptable use policy <Link href="/policy" target="_blank"><a href="/policy" target="_blank">https://pebblo.org/policy</a></Link> sets out all the permitted uses and prohibited uses of this site.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>You may not access or use the site for any purpose other than that for which we make the site and our services available. The site may not be usedin connection with any commercial endeavours except those that are specifically endorsed or approved by us.</p>
            </li>
            <li className={styles.legal_unlist_item}>
              <p>
                As a user of this site you agree not to <hr/>

                &mdash; Systematically retrieve data or other content from the site to a compile database or directory without written permission from us. <hr/>
                &mdash; Make any unauthorized use of the site, including collecting usernames and/or email addresses of users to send unsolicited email or creating user accounts under false pretences. <hr/>
                &mdash; Use of buying agent or puchasing agent to make purchases on the site <hr/>
                &mdash; Circumvent, disable, or otherwise interfere with security-related features of the site including features that prevent or restrict the use or copying of any content or enforce limitations on the sue. <hr/>
                &mdash; Engage in unauthorized framing of or linking to the site. <hr/>
                &mdash; Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user password. <hr/>
                &mdash; Attempt to impersonate another use or person, or use the username of another user. <hr/>
                &mdash; Sell or otherwise transfer your profile. <hr/>
                &mdash; Use any information obtained rom the site in order to harass, abuse or harm another person. <hr/>
                &mdash; Use the site our content as part of any effort to complete with us or to create a revenue-generating endeavour or commercial enterprise.
              </p>
            </li>
          </ul>


        </div>

        <Footer />

      <Nav/>
    </>
  )
}