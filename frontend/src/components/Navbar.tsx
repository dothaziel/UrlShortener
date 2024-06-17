import { Link } from "react-router-dom"
import styles from "../stylesheets/nav.module.css"

export default function Navbar() {
    return(
        <div className={styles.container}>
            <h1 className={styles.brand__text}>Haziel</h1>
            <div className={styles.btns__container}>
                <Link to="/auth/login" className={`${styles.btn} ${styles.btn__primary}`}>Login</Link>
                <Link to="/auth/register" className={`${styles.btn} ${styles.btn__secondary}`}>Register</Link>
            </div>
        </div>
    )
}