import styles from "./SearchCourseCard.module.scss";
import Link from "next/link";
import Quality from "../Quality/Quality";

export default function SearchCourseCard(course: SearchCourseCardProp) {
  const qualityColor =
    course.quality < 3.0
      ? styles.red
      : course.quality < 4.0
        ? styles.yellow
        : styles.green;

  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <div className={styles.headerText}>
          {course.semester} - {course.code}
        </div>
        <div className={styles.meta}>
          <span>{course.department}</span>
          <span>{course.credits} Credits</span>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.contentRow}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            <Link href={`/courses/${course.id}`} className={styles.title}>
              {course.title}
            </Link>
          </h2>
          <p className={styles.professor}>
            professor <strong>{course.professor}</strong>
          </p>
          <div className={styles.time}>{course.time}</div>
        </div>

        <Quality rating={course.quality}/>
        <Quality category='difficulty' rating={course.difficulty}/>

      </div>
    </div>
  );
}
