import Link from 'next/link';
import React from 'react';
import styles from '../../styles/business/ui.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <img src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg" alt="" className={styles.avatar}/>
                    <h1 className={styles.company}>Tesla</h1>
                    <h1 className={styles.category}>Car Manufacturer</h1>
                        <div className={styles.tabs}>
                            <Link href=""><a href="">Home</a></Link>
                            <Link href=""><a href="">Services</a></Link>
                            <Link href=""><a href="">Reviews</a></Link>
                            <Link href=""><a href="">Events</a></Link>
                            <Link href=""><a href="">Shop</a></Link>
                            <Link href=""><a href="">Jobs</a></Link>
                            <hr/>
                            <Link href=""><a href="" className={styles.tabs_website}>tesla.com</a></Link>
                        </div>
                </div>
                
            </div>
        </>
    )
}

export default Page;