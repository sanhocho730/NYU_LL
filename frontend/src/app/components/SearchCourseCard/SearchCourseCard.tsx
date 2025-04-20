
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
  /** overall rating */
  rating: number;
  difficulty: number;
  ratingCount: number;
};

export default function SearchCourseCard(props: SearchCourseCardProp) {
  return (
    <Link href={`/courses/${props.id}`} className={styles.card}>
      <div className={styles.headerRow}>
        <span className={styles.headerText}>
          {props.semester} &mdash; {props.code}
        </span>
        <span className={styles.meta}>
          {props.department} &bull; {props.credits} cr
        </span>
      </div>

      <hr className={styles.divider} />

      <div className={styles.contentRow}>
        <div className={styles.left}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.professor}>
            Prof. <strong>{props.professor}</strong>
          </p>
          <p className={styles.time}>{props.time}</p>
        </div>

        <div className={styles.ratings}>
          <Quality rating={props.rating} />
          <Quality category="Difficulty" rating={props.difficulty} />
        </div>
      </div>
    </Link>
  );
}
