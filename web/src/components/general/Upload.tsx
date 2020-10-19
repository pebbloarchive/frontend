import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/profile/upload.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);
    const [clicked, wasClicked] = useState<boolean>(false);

    const onClick = () => {
        if(!clicked) {
            wasClicked(true);
        } else {
            wasClicked(false);
        }
    };

    const Context = () => {
        return (
            <section className={styles.upload}>
                tyasubhf
            </section>
        )
    }

    return (
        <>
            <div className={styles.content}>
            </div>

                {loggedIn ? 
                <button className={styles.button} onClick={onClick}>
                    fsabvfhajsashjvf bnajs fhjbas fhjas hf sah fhjsa fhjas hf sahjf hjas fhjas hfjas hjf has fhjas hfas hf ashj fhjasfha shf ashj fhjas hfa shj hj
                     { clicked ? <Context /> : '' }
                </button> : '' }
        </>
    )
}

export default Page;