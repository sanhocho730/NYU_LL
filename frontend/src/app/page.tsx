import styles from "./page.module.scss";
import { CourseCard } from "../components";
import Link from "next/link";

const COURSES: Array<CourseCardPropType> = new Array(3).fill(
  {
    id: 0,
    title: 'Numerical Analysis',
    professor: 'Wenzheng shi',
    quality: 4.44,
    difficulty: 2.45,
  })

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.overview}>
          <h1><b>Top-Rated</b> Courses</h1>
          <ul>
            {COURSES.map((course)=><CourseCard key={course.id} {...course}/>)}
          </ul>
        </div>
        <div className={styles.overview}>
          <h1><b>Low-Difficulty</b> Courses</h1>
          <ul>
            {COURSES.map((course)=><CourseCard key={course.id} {...course}/>)}
          </ul>
        </div>
        <div className={styles.overview}>
          <h1>
            <select name="school" id="school">
              <option value="cas">CAS</option>
              <option value="sps">SPS</option>
              <option value="stern">Stern</option>
              <option value="tisch">Tisch</option>
              <option value="tandon">Tandon</option>
            </select>
            &nbsp;&nbsp;Courses</h1>
          <ul>
            {COURSES.map((course)=><CourseCard key={course.id} {...course}/>)}
          </ul>
        </div>
      </main>
    </div>
  );
}
