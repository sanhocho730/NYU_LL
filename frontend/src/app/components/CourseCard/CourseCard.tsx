import styles from './CourseCard.module.scss'
import Link from 'next/link'

export default function CourseCard() {
    return <Link href="/" className={styles.main}>
        <h3>Course Name</h3>
        <p>Prof. Professor name</p>
        <div className={styles.rating}>
            <p>overall</p>
            <h1>4.9</h1>
        </div>
        <div className={styles.difficulty}>
            <p>difficulty</p>
            <h1>1.9</h1>
        </div>
    </Link>

}