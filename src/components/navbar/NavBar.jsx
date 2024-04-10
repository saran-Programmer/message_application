import styles from "./NabBar.module.css"

const NavBar = () => {
    return(
    <nav className={styles.container}>
        <div className={styles.leftSide}>Text Flow App</div>
        <div className={styles.rightSide}>
            <button>Save Changes</button>
        </div>
    </nav>
    )
}

export default NavBar