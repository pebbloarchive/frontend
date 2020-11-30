import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/auth.module.css';
import { getAvatar } from '../../../utils';

const Single = () => {
    return (
        <>
            <Link href="/kyle/[post]"><a href="/kyle/[post]" className={styles.overlay}></a></Link>
            <form className={styles.report}>
                <div className={styles.report_title}>
                    <p>Why are you reporting this post?</p>
                </div>
                <div className={styles.report_list}>
                    <input type="submit" value="Innapropriate"/>
                    <input type="submit" value="Misleading or Scam"/>
                    <input type="submit" value="Hate Speech"/>
                    <input type="submit" value="Harassment"/>
                    <input type="submit" value="False Information"/>
                    <input type="submit" value="Spam"/>
                    <input type="submit" value="Self harm"/>
                    <input type="submit" value="Terrorism"/>

                    <label className={styles.report_custom}>
                        <input type="search" name="" id="" placeholder="Reason not listed?"/>
                    </label>
                </div>
            </form>
        </>
    )
}

export default Single;