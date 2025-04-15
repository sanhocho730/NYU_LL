import styles from "./page.module.scss";
import CourseCard from "./components/CourseCard/CourseCard"; // adjust the import path if needed
import Link from "next/link";

type Course = {
  id: string;
  title: string;
  professor: string;
  rating: number;
  difficulty: number;
};

async function getCourses(): Promise<Course[]> {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
}

export default async function Home() {
  // Fetch courses from your internal API
  const courses = await getCourses();

  // You can filter or sort courses into different sections as desired
  const topRatedCourses = courses.filter((course) => course.rating >= 4.7);
  const lowDifficultyCourses = courses.filter((course) => course.difficulty <= 2.2);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Top-Rated Courses Section */}
        <div className={styles.overview}>
          <h1>
            <b>Top-Rated</b> Courses
          </h1>
          <Link href="/" className={styles.seemore}>
            See More &#x2192;
          </Link>
          <ul>
            {topRatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </ul>
        </div>

        {/* Low-Difficulty Courses Section */}
        <div className={styles.overview}>
          <h1>
            <b>Low-Difficulty</b> Courses
          </h1>
          <Link href="/" className={styles.seemore}>
            See More &#x2192;
          </Link>
          <ul>
            {lowDifficultyCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </ul>
        </div>

        {/* All Courses Section */}
        <div className={styles.overview}>
          <h1>
            <select name="school" id="school">
              <option value="cas">CAS</option>
              <option value="sps">SPS</option>
              <option value="stern">Stern</option>
              <option value="tisch">Tisch</option>
            </select>
            &nbsp;&nbsp;Courses
          </h1>
          <Link href="/" className={styles.seemore}>
            See More &#x2192;
          </Link>
          <ul>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}