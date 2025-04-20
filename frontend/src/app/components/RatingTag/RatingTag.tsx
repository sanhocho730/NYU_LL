import styles from './RatingTag.module.scss'

export default function RatingTag({category, value}: RatingTagProps){
    let color = ''
    if(value>4) color = '#FF9090'
    else if(value>2) color = '#FFCD90'
    else color='#BCFFC6'

    
    return <div style={{ backgroundColor: color}} className={styles.main}>
        {category}: {value}
    </div>

}