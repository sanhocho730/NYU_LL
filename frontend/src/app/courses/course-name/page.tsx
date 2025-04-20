import styles from './page.module.scss'
import { BarChart } from '@mui/x-charts/BarChart';
import { RatingCard, BackButton } from '@/app/components';

const REVIEWS: Array<RatingCardPropType> = [
    {
        tagList: [
            {
                category: 'Difficulty',
                value: 1,
            },
            {
                category: 'Amount of Work',
                value: 1,
            },
            {
                category: 'Clarity of Lecture',
                value: 3,
            },

        ],
        comment: 'Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, theres no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.',
        rating: 5,
    },
    {
        tagList: [
            {
                category: 'Difficulty',
                value: 1,
            },
            {
                category: 'Amount of Work',
                value: 1,
            },
            {
                category: 'Clarity of Lecture',
                value: 3,
            },

        ],
        comment: 'Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, theres no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.',
        rating: 5,
    },
    {
        tagList: [
            {
                category: 'Difficulty',
                value: 1,
            },
            {
                category: 'Amount of Work',
                value: 1,
            },
            {
                category: 'Clarity of Lecture',
                value: 3,
            },

        ],
        comment: 'Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, theres no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.',
        rating: 5,
    },
    {
        tagList: [
            {
                category: 'Difficulty',
                value: 1,
            },
            {
                category: 'Amount of Work',
                value: 1,
            },
            {
                category: 'Clarity of Lecture',
                value: 3,
            },

        ],
        comment: 'Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, theres no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.',
        rating: 5,
    },
    {
        tagList: [
            {
                category: 'Difficulty',
                value: 1,
            },
            {
                category: 'Amount of Work',
                value: 1,
            },
            {
                category: 'Clarity of Lecture',
                value: 3,
            },

        ],
        comment: 'Professor Shi is one of the most helpful and caring professors at OP. He explains complex chemistry topics clearly, making lectures engaging and resourceful. Since he teaches non-credit courses, theres no pressure, to foster better learning. Anyone in his class is lucky to learn from his vast knowledge and experience.',
        rating: 5,
    },
]

const exData: CourseDetail = {
    id: 0,
    quality: 3.6,
    semester: 'Fall 2024',
    code: 'MATH-UA 112',
    title: 'Numerical Analysis',
    professor: 'Wenzheng Shi',
    description: 'In numerical analysis one explores how mathematical problems can be analyzed and solved with a computer. As such, numerical analysis has very broad applications in mathematics, physics, engineering, finance, and the life sciences. This course gives an introduction to this subject for mathematics majors. Theory and practical examples using Matlab will be combined to study a range of topics ranging from simple root-finding procedures to differential equations and the finite element method.',
    ratings: REVIEWS
}
  
export default function CourseDetail(){
    const {quality, semester, code, title, professor, description, ratings} = exData
    
    const ratingDist = new Array(5).fill(0)
     const totalNum = ratings.length
     for(const rating of ratings) ratingDist[rating.rating-1]++
     ratingDist.reverse()
     const spaces = ratingDist.map(num=>totalNum-num)

    
    return <div className={styles.main}>
        <BackButton />
        <div className={styles.overview}>
            <div className={styles.ratingdist}>
                <h2>Rating Distribution</h2>
                <BarChart
                    yAxis={[{ 
                        tickLabelStyle: {
                        fontSize: 20,
                        fontWeight: 'bolder',
                        },
                        scaleType: 'band', 
                        data: ['5','4','3','2','1'], 
                        disableLine:true, 
                        disableTicks: true, 
                        width: 20, 
                        
                    }]}
                    xAxis={[{
                        position: "none",
                    }]}
                    series={[{ data: ratingDist, stack: 'A',color: '#57068C'}, {data:spaces, stack:'A',color: '#D9D9D9'}]}
                    layout="horizontal"
                    width={400}
                    height={300}
                />
            </div>
            <div className={styles.desc}>
                <h1>{quality}<small>/5</small></h1>
                <p>{`${semester} - ${code}`}</p>
                <h1>{title}</h1>
                <h3>Professor {professor}</h3>
                <h2>Course Description</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className={styles.rating}>
            <h1>Ratings</h1>
            {REVIEWS.map((review,ind)=><RatingCard key={`${ind}`} {...review}/>)}
        </div>
        {/* <div className={styles.other}>
            <h1>Explore other courses</h1>

        </div> */}
    </div>
}