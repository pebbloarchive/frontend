import styles from '../styles/profile.module.css'

const Topnav = () => {
    return (
        <>
            <div className={styles.content}>

                    <form className={styles.upload}>
                        <textarea name="" id="" cols="1" rows="2" placeholder="Create a post"></textarea>
                            {/* <label>
                                <input type="file" name="" id=""/>
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/745852834972565535/camera.png" alt=""/>
                            </label> ALLOW IN WEBCAM ONCE I FIGURE IT OUT */}
                            <label>
                                <input type="file" name="" id=""/>
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/745854755649355876/gallery.png" alt=""/>
                            </label>
                            <label>
                                <input type="file" name="" id=""/>
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/745854061454033076/emoji.png" alt=""/>
                            </label>
                    </form>

                    

            </div>

            <div className={styles.suggested}>
            </div>
        </>
    )
}

export default Topnav;