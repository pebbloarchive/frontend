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
                        <h1 className={styles.footer_title}>Company</h1>
                            <Link href="/"><a href="/">Home</a></Link>
                            <Link href="/features"><a href="/features">About</a></Link>
                            <Link href="/contact"><a href="/contact">Contact Us</a></Link>
                            <Link href="/explore"><a href="/explore">Explore</a></Link>
                            <Link href="/features/content-creators"><a href="/features/content-creators">Content Creators</a></Link>
                            <Link href="/features/business"><a href="/features/business">Business</a></Link>
                    </div>
                    <div className={styles.footer_section}>
                        <h1 className={styles.footer_title}>Work</h1>
                            <Link href="/features"><a href="/features">Features</a></Link>
                            <Link href="/features/branding"><a href="/features/branding">Branding</a></Link>
                            <Link href="/features/content-creators"><a href="/features/content-creators">Content Creators</a></Link>
                            <Link href="/features/business"><a href="/features/business">Business</a></Link>
                    </div>
                    <div className={styles.footer_section}>
                        <h1 className={styles.footer_title}>Resources</h1>
                            <Link href="/resources"><a href="/resources">Resources</a></Link>
                            <Link href=""><a href="">User Guides</a></Link>
                            <Link href=""><a href="">Safety &amp; Security</a></Link>
                            <Link href=""><a href="">Verification</a></Link>
                    </div>
                    <div className={styles.footer_social}>
                            <Link href="/resources"><a href="/resources">
                                <img src="/images/discord.png" alt=""/>
                            </a></Link>
                            <Link href="/resources"><a href="/resources">
                                <img src="/images/instagram.png" alt=""/>
                            </a></Link>
                            <Link href="/resources"><a href="/resources">
                                <img src="/images/twitter.png" alt=""/>
                            </a></Link>
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