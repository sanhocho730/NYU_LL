// src/app/components/SearchCourseCard/SearchCourseCard.tsx
import Link from "next/link";
import styles from "./SearchCourseCard.module.scss";
import Quality from "../Quality/Quality";

export type SearchCourseCardProp = {
  id: string;
  semester: string;
  code: string;
  department: string;
  credits: number;
  title: string;
  professor: string;
  time: string;
  rating: number;        // overall rating (average)
  difficulty: number;    // overall difficulty (average)
  description: string;
  ratingCount: number;
};

export default function SearchCourseCard(props: SearchCourseCardProp) {
  const qualityColor =
  props.rating < 3.0
    ? styles.red
    : props.rating < 4.0
      ? styles.yellow
      : styles.green;

return (
  
  <div className={styles.card}>
    <div className={styles.headerRow}>
      <div className={styles.headerText}>
        {props.semester} - {props.code}
      </div>
      <div className={styles.meta}>
        <span>{props.department}</span>
        <span>{props.credits} Credits</span>
      </div>
    </div>

    <hr className={styles.divider} />

    <div className={styles.contentRow}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          <Link href={`/courses/${props.id}`} className={styles.title}>
            {props.title}
          </Link>
        </h2>
        <p className={styles.professor}>
          professor <strong>{props.professor}</strong>
        </p>
        <div className={styles.time}>{props.time}</div>
      </div>

      <div className={styles.rating}>
        <div className={`${styles.score} ${qualityColor}`}>
          {props.rating.toFixed(1)}
        </div>
        <div className={styles.ratingInfo}>Quality</div>
      </div>
      <div className={styles.rating}>

        <div className={`${styles.score} ${styles.gray}`}>
          {props.difficulty.toFixed(1)}
        </div>
        <div className={styles.ratingInfo}>Difficulty</div>
      </div>

    </div>
  </div>
);
}
