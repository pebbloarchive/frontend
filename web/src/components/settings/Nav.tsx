import styles from '../styles/settings/navbar.module.css'
import { usePulse } from 'pulse-framework';
import Router from 'next/router';
import Link from 'next/link';
import core from '@pebblo/core';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import { getAvatar } from '../utils';

const Topnav = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        switch(route) {
            case '/andre/settings':
                return isActive('settings');
            case '/andre/settings/privacy-safety':
                 return isActive('privacy');
            case '/andre/settings/password':
                return isActive('password');
            case '/andre/settings/connections':
                 return isActive('connections');
            case '/andre/settings/display':
                return isActive('display');
            case '/andre/settings/notifications':
                return isActive('notifications');
            case '/andre/settings/linked':
                return isActive('linked');
            // case '/andre/settings/staff-tools':
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
                    <Link href="/andre/settings">
                        <a className={`${active === 'settings' ? styles.settings_active : ''}`}>
                            {loggedIn ? <img className={styles.settings_avatar} src={getAvatar('andre')} alt=""/> : '' ? !loggedIn : '' }
                            <span>Edit Profile</span>
                        </a>
                    </Link>
                    <Link href="/andre/settings/privacy-safety" >
                        <a className={`${active === 'privacy' ? styles.settings_active : ''}`}>
                            <img src="/icons/lock.png" alt="Privacy and Safety > Padlock"/>
                            <span>Privacy &amp; Safety</span>
                        </a>
                    </Link>
                    <Link href="/andre/settings/password">
                        <a href="/andre/settings/password" className={`${active === 'password' ? styles.settings_active : ''}`}>
                            <img src="/icons/key.png" alt="Change Password | Key"/>
                            <span>Change Password</span>
                        </a>
                    </Link>
                    <Link href="/andre/settings/connections">
                        <a className={`${active === 'connections' ? styles.settings_active : ''}`}>
                            <img src="/icons/connection.png" alt="Connections | Connection"/>
                            <span>Connections</span>
                        </a>
                    </Link>
                    <Link href="/andre/settings/display">
                        <a className={`${active === 'display' ? styles.settings_active : ''}`}>
                            <img src="/icons/dropper.png" alt="Display | Color Palette"/>
                            <span>Display</span>
                        </a>
                    </Link>
                    <Link href="/andre/settings/notifications">
                        <a className={`${active === 'notifications' ? styles.settings_active : ''}`}>
                            <img src="/icons/bell.png" alt="Notifications | Bell"/>
                            <span>Notifications</span>
                        </a>
                    </Link>
                    {/* <Link href="/andre/settings/linked">                    
                        <a className={`${active === 'linked' ? styles.settings_active : ''}`}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/750927637681143809/staff_settings_badge.png" alt="Staff Tools | Staff Badge"/>
                            <span>Linked Account</span>
                        </a>
                    </Link> */}
                    {/* <Link href="/andre/settings/staff-tools">                    
                        <a className={`${active === 'staff' ? styles.settings_active : ''}`}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/750927637681143809/staff_settings_badge.png" alt="Staff Tools | Staff Badge"/>
                            <span>Staff Tools</span>
                        </a>
                    </Link> */}
                </div>
            </div>
            
            <a href="/andre" className={styles.settings_home}></a>
        </>
    )
}

export default Topnav;