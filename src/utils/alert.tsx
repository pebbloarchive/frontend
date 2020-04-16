import styles from '../styles/components/alerts.module.css';

export function success(message: string) {
    return (
        <div className={styles.alerts}>
            <div className={styles.alert_container}>
                <div className={styles.alert_success}>
                <section>
                    <img src="images/alerts/rocket.png" alt="" />
                    <p>{message}</p>
                </section>
                </div>
            </div>
        </div>
    )
}

export function info(message: string) {
    return (
        <div className={styles.alerts}>
            <div className={styles.alert_container}>
                <div className={styles.alert_info}>
                <section>
                    <img src="images/alerts/info.png" alt="" />
                    <p>{message}</p>
                </section>
                </div>
            </div>
        </div>
    )
}

export function warning(message: string) {
    return (
        <div className={styles.alerts}>
            <div className={styles.alert_container}>
                <div className={styles.alert_warning}>
                <section>
                    <img src="images/alerts/warning.png" alt="" />
                    <p>{message}</p>
                </section>
                </div>
            </div>
        </div>
    )
}

export function error(message: string) {
    return (
        <div className={styles.alerts}>
            <div className={styles.alert_container}>
                <div className={styles.alert_error}>
                <section>
                    <img src="images/alerts/error.png" alt="" />
                    <p>{message}</p>
                </section>
                </div>
            </div>
        </div>
    )
}

export function announce(message: string) {
    return (
        <div className={styles.alerts}>
            <div className={styles.alert_container}>
                <div className={styles.alert_announcer}>
                <section>
                    <img src="images/alerts/megaphone.png" alt="" />
                    <p>{message}</p>
                </section>
                </div>
            </div>
        </div>
    )
}