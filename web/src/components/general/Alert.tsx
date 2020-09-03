import styles from '../styles/auth.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.alerts}>

                <section className={styles.alerts_error}>
                {/* 
                            alerts_success
                            alerts_uplaod
                            alerts_error
                            alerts_info
                 */}
                    There was an error updating your settings.
                </section>

            </div>
        </>
    )
}

export default Page;