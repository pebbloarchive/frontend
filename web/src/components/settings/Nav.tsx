import styles from '../styles/settings/navbar.module.css'
import { usePulse } from 'pulse-framework';
import Router from 'next/router';
import Link from 'next/link';
import core from '@pebblo/core';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';

const Topnav = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        switch(route) {
            case '/settings':
                return isActive('settings');
            case '/settings/privacy-safety':
                 return isActive('privacy');
            case '/settings/password':
                return isActive('password');
            case '/settings/connections':
                 return isActive('connections');
            case '/settings/display':
                return isActive('display');
            case '/settings/notifications':
                return isActive('notifications');
            case '/settings/linked':
                return isActive('linked');
            // case '/settings/staff-tools':
            //     return isActive('staff');
        }
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });

    return (
        <>
            <div className={styles.settings}>
                <div className={styles.settings_content}>
                    <Link href="/settings">
                        <a className={`${active === 'settings' ? styles.settings_active : ''}`}>
                            {loggedIn ? <img className={styles.settings_avatar} src={current.avatar} alt=""/> : '' ? !loggedIn : '' }
                            <span>Edit Profile</span>
                        </a>
                    </Link>
                    <Link href="/settings/privacy-safety" >
                        <a className={`${active === 'privacy' ? styles.settings_active : ''}`}>
                            <img src="/icons/lock.png" alt="Privacy and Safety > Padlock"/>
                            <span>Privacy &amp; Safety</span>
                        </a>
                    </Link>
                    <Link href="/settings/password">
                        <a href="/settings/password" className={`${active === 'password' ? styles.settings_active : ''}`}>
                            <img src="/icons/key.png" alt="Change Password | Key"/>
                            <span>Change Password</span>
                        </a>
                    </Link>
                    <Link href="/settings/connections">
                        <a className={`${active === 'connections' ? styles.settings_active : ''}`}>
                            <img src="/icons/connection.png" alt="Connections | Connection"/>
                            <span>Connections</span>
                        </a>
                    </Link>
                    <Link href="/settings/display">
                        <a className={`${active === 'display' ? styles.settings_active : ''}`}>
                            <img src="/icons/dropper.png" alt="Display | Color Palette"/>
                            <span>Display</span>
                        </a>
                    </Link>
                    <Link href="/settings/notifications">
                        <a className={`${active === 'notifications' ? styles.settings_active : ''}`}>
                            <img src="/icons/bell.png" alt="Notifications | Bell"/>
                            <span>Notifications</span>
                        </a>
                    </Link>
                    {/* <Link href="/settings/linked">                    
                        <a className={`${active === 'linked' ? styles.settings_active : ''}`}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/750927637681143809/staff_settings_badge.png" alt="Staff Tools | Staff Badge"/>
                            <span>Linked Account</span>
                        </a>
                    </Link> */}
                    {/* <Link href="/settings/staff-tools">                    
                        <a className={`${active === 'staff' ? styles.settings_active : ''}`}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/750927637681143809/staff_settings_badge.png" alt="Staff Tools | Staff Badge"/>
                            <span>Staff Tools</span>
                        </a>
                    </Link> */}
                </div>
            </div>
            
            { loggedIn ?  <a href={`/${current.username}`} className={styles.settings_home}></a> : '' }
        </>
    )
}

export default Topnav;