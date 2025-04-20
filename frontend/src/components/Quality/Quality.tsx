import styles from './Quality.module.scss'

export default function Quality({category, rating}: QualityPropType){
    let color = ''
    if(rating<3) color = '#FF9090'
    else if(rating<5) color = '#FFCD90'
    else color='#BCFFC6'

    return <div className={styles.main}>
        <p>{category ? category : 'Quality'}</p>
        <h1 style={{backgroundColor: color}} >{rating.toFixed(1)}</h1>
    </div>
}