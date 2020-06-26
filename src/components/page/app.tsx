import styles from '../../styles/components/page/app.module.css';


const App = () => {
    return (
            <div className={styles.content}>
                <div className={styles.why_pebblo}>
                    <div className={styles.why_pebblo_content}>
                        <h1 className={styles.why_pebblo_title}>Share Your Story</h1>
                        <p className={styles.why_pebblo_paragraph}>Bringing people together from around the world.</p>
                    </div>
                </div>
            </div>
    )
}

export default App;