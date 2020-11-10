import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/landing.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>


{/* https://dribbble.com/shots/12896171-Footer-UI-Design/attachments/4496112?mode=media */}


            <div className={styles.footer}>
                
                <div className={styles.footer_content}>
                    <div className={styles.footer_section}>
                        <h1 className={styles.footer_title}>Quick Links</h1>
                            <Link href="/home"><a href="/home">Home</a></Link>
                            <Link href="/features"><a href="/features">About Us</a></Link>
                            <Link href="/explore"><a href="/explore">Explore</a></Link>
                            <Link href="/creators"><a href="/creators">Content Creators</a></Link>
                            <Link href="/business"><a href="/business">Business</a></Link>
                            <Link href="/blog"><a href="/blog">Blog</a></Link>
                    </div>
                    <div className={styles.footer_section}>
                        <h1 className={styles.footer_title}>Work</h1>
                            <Link href="/features"><a href="/features">Features</a></Link>
                            <Link href="/features/branding"><a href="/features/branding">Branding</a></Link>
                            <Link href="/features/content-creators"><a href="/features/content-creators">Content Creators</a></Link>
                            <Link href="/features/business"><a href="/featuers/business">Business</a></Link>
                    </div>
                    <div className={styles.footer_section}>
                        <h1 className={styles.footer_title}>Resources</h1>
                            <Link href="/resources"><a href="/resources">Contact Us</a></Link>
                            <Link href=""><a href="">User Guides</a></Link>
                            <Link href=""><a href="">Safety &amp; Security</a></Link>
                            <Link href=""><a href="">Verification</a></Link>
                    </div>
                </div>

                <div className={styles.footer_banner}>
                    <div className={styles.footer_banner_content}>
                        <div className={styles.footer_banner_title}>Switch to a business account today and grow your community</div>
                        <p className={styles.footer_banner_message}>Business accounts are made to help with <a href="/" target="_blank" rel="noopener noreferrer">SEO &amp; Marketing</a> so your page get found over the internet and on our website.</p>
                            <div className={styles.footer_banner_button}>
                                <Link href="/features/business"><a href="/features/business">Upgrade my plan</a></Link>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Topnav;