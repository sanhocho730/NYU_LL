import styles from './CourseCard.module.scss'
import Link from 'next/link'

export default function CourseCard({id,title, professor, quality, difficulty}: CourseCardPropType) {
    return <Link href={`/courses/${id}`} className={styles.main}>
        <h3>{title}</h3>
        <p>Prof. {professor}</p>
        <div className={styles.rating}>
            <p>overall</p>
            <h1>{quality.toFixed(1)}</h1>
        </div>
        <div className={styles.difficulty}>
            <p>difficulty</p>
            <h1>{difficulty.toFixed(1)}</h1>
        </div>
    </Link>
}