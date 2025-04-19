import styles from './page.module.scss'
import { BarChart } from '@mui/x-charts/BarChart';
import { RatingCard } from '@/app/components';

  
export default function CourseDetail(){
    return <div className={styles.main}>
        <button className={styles.back}>&lt; Back</button>
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
                    series={[{ data: [4,4,5,1,2], stack: 'A',color: '#57068C'}, {data:[1,1,0,4,3], stack:'A',color: '#D9D9D9'}]}
                    layout="horizontal"
                    width={400}
                    height={300}
                />
            </div>
            <div className={styles.desc}>
                <h1>3.6<small>/5</small></h1>
                <p>Fall 2024 - MATH-UA 112</p>
                <h1>Numerical Analysis</h1>
                <h3>Course Description</h3>
                <p>In numerical analysis one explores how mathematical problems can be analyzed and solved with a computer. As such, numerical analysis has very broad applications in mathematics, physics, engineering, finance, and the life sciences. This course gives an introduction to this subject for mathematics majors. Theory and practical examples using Matlab will be combined to study a range of topics ranging from simple root-finding procedures to differential equations and the finite element method.
                </p>
            </div>
        </div>
        <div className={styles.rating}>
            <h1>Ratings</h1>
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
        </div>
        {/* <div className={styles.other}>
            <h1>Explore other courses</h1>

        </div> */}
    </div>
}