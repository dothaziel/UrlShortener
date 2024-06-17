import Navbar from "../components/Navbar";
import styles from "../stylesheets/home.module.css"
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className={styles.container}>
            <header>
                <Navbar />
            </header>
            <main>
                <h1 className={styles.title}>
                    Open Source URL Shortener
                </h1>
                <p className={styles.description}>
                Open source URL shortener, developed with web technologies: NodeJS, ExpressJS, MongoDB and ReactJS.
                <br /><br />
                Developed by Haziel Campos, this project allows you to shorten URLs for free and quickly, manage, edit or delete them at any time.
                </p>

                <Link to="/auth/login" className={`${styles.btn} ${styles.btn__fancy}`}>Get Started</Link>
            </main>
        </div>
    )
}