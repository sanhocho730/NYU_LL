import styles from './RatingCard.module.scss'

export default function RatingCard(){
    return <div className={styles.main}>
        <div className={styles.taglist}>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
            <p>Difficulty: 1</p>
        </div>
        <div className={styles.body}>
            <p>
            Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, there's no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.
            </p>
            <div className={styles.quality}>
                <p>Quality</p>
                <h1>4</h1>
            </div>

        </div>
    </div>
}