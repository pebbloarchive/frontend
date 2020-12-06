
import styles from '@pebblo/css/landing.module.css';
import Link from 'next/link';

const Topnav = () => {
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
                        <div className={styles.footer_banner_title}>Our <span>Public BETA</span> is now live! Create your first account on <span>Pebblo</span>!</div>
                        <p className={styles.footer_banner_message}>Share your story with the world, create a post on your timeline, follow and interact with your friends in a simple way by using Pebblo.</p>
                            <div className={styles.footer_banner_button}>
                                <Link href="/create"><a href="/create">Start Now!</a></Link>
                            </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Topnav;