import styles from './RatingCard.module.scss'
import RatingTag from '../RatingTag/RatingTag'
import Quality from '../Quality/Quality'

export default function RatingCard({tagList, comment, rating}:RatingCardPropType){


    return <div className={styles.main}>
        <div className={styles.taglist}>
            {tagList.map((tag,ind)=><RatingTag key = {`${tag.category}-${ind}`} {...tag} />)}
        </div>
        <div className={styles.body}>
            <p>
            {comment}
            </p>
            <Quality rating={rating}/>

        </div>
    </div>
}