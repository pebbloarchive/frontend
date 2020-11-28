import Head from 'next/head';
import { GetServerSideProps } from 'next';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountUser as UserProps } from '@pebblo/core/lib/controllers/accounts/account.interfaces'
import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import styles from '../../../styles/profile/home/feed.module.css';

const Private = () => {
    return (
        <>
            <div className={styles.private}>
                <div className={styles.private_icon}>
                    <img className={styles.private_icon_unlock} src="/icons/unlock.png" alt=""/>
                    <img className={styles.private_icon_lock} src="/icons/lock.png" alt=""/>
                </div>
                <section>
                    <h1 className={styles.private_title}>Private Account</h1>
                    <p className={styles.private_message}>
                        Request to follow <span>@kyle</span> so you can message and see their content.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Private;