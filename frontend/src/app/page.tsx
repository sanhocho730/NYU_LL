import styles from "./page.module.scss";
import { CourseCard } from "./components";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.overview}>
          <h1><b>Top-Rated</b> Courses</h1>
          <Link href="/" className={styles.seemore}>See More &#x2192;</Link>
          <ul>
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </ul>
        </div>
        <div className={styles.overview}>
          <h1><b>Low-Difficulty</b> Courses</h1>
          <Link href="/" className={styles.seemore}>See More &#x2192;</Link>
          <ul>
            <CourseCard />
            <CourseCard />
            <CourseCard />
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
          <Link href="/" className={styles.seemore}>See More &#x2192;</Link>
          <ul>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </ul>
        </div>
      </main>
    </div>
  );
}
