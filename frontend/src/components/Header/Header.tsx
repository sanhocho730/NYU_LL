import Link from "next/link"
import styles from './Header.module.scss'

export default function Header() {
    return <div className={styles.main}>
        <Link href="/" className={styles.logo}><b>NYU COURSE GUIDE</b></Link>
        <menu>
            <Link href="/" className={styles.link}>Chat with AI</Link>
            <Link href="/search" className={styles.link}>Search</Link>
            <Link href="/" className={styles.link}>About</Link>
            <Link href="/" className={`${styles.link} ${styles.login}`}>Login</Link>
        </menu>
    </div>
}