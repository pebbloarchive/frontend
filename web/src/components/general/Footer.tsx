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
            <div className={styles.footer}>
                <div className={styles.footer_item}>
                    <h1>Connect with us</h1>
                        {/* <Link href="/pebblo" target="_blank"><a href="/pebblo" target="_blank">Pebblo</a></Link> */}
                        <Link href="https://twitch.tv/pebbloo" target="_blank"><a href="https://twitch.tv/pebbloo" target="_blank">Twitch</a></Link>
                        <Link href="https://discord.gg/4w9k3yQ" target="_blank"><a href="https://discord.gg/4w9k3yQ" target="_blank">Discord</a></Link>
                        <Link href="https://twitter.com/pebblocompany" target="_blank"><a href="https://twitter.com/pebblocompany" target="_blank">Twitter</a></Link>
                        <hr/>
                        <Link href="/contact"><a href="/contact">Contact</a></Link>
                        {/* <Link href="mailto:support@pebblo.org"><a href="mailto:support@pebblo.org">support@pebblo.org</a></Link> */}
                </div>
                {/* { !loggedIn ? <div className={styles.footer_item}>
                    <h1>Pages</h1>
                        <Link href={`/${current.username}` }><a href={`/${current.username}`}>Profile <span>({current.username})</span></a></Link>
                        <Link href="/explore"><a href="/explore">Explore</a></Link>
                        <Link href="/notifications"><a href="/notifications">Notifications</a></Link>
                        <Link href="/messages"><a href="/messages">Messages</a></Link>
                    <hr/>
                        <Link href="/logout"><a href="/logout">Logout</a></Link>
                </div> : '' } */}
                <div className={styles.footer_item}>
                    <h1>Quick Access</h1>
                        <Link href="/login"><a href="/login">Login</a></Link>
                        <Link href="/create"><a href="/create">Create an Account</a></Link>
                    <hr/>
                        <Link href="/"><a href="/" target="_blank">Home</a></Link>
                        <Link href="/about"><a href="/about" target="_blank">Features</a></Link>
                        <Link href="/explore"><a href="/explore" target="_blank">Explore</a></Link>
                        <Link href="/resources"><a href="/resources" target="_blank">Resources</a></Link>
                        <Link href="/blog"><a href="/blog" target="_blank">Blog</a></Link>
                </div>
                <div className={styles.footer_item}>
                    <h1>Help Desk</h1>
                        {/* <Link href="/blog/safety"><a href="/blog/safety">Safety</a></Link>
                        <Link href="/blog/security"><a href="/blog/security">Security</a></Link> */}
                        <Link href="/resources"><a href="/resources">Resources</a></Link>
                        <Link href="/resources"><a href="/resources">Support</a></Link>
                        <hr/>
                        <Link href="/terms"><a href="/terms">Terms of service</a></Link>
                        <Link href="/privacy"><a href="/privacy">Privacy policy</a></Link>
                </div>
            </div>
        </>
    )
}

export default Topnav;