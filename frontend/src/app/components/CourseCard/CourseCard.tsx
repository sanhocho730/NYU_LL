import { Course } from "@/app/lib/courses"; // adjust if needed
import styles from "./CourseCard.module.scss";
import Link from "next/link";

type CourseProps = {
  course: {
    id: string;
    title: string;
    professor: string;
    rating: number;
    difficulty: number;
  };
};

export default function CourseCard({ course }: CourseProps) {
  return (
    <li className={styles.main}>
      {/* Link to course detail page */}
      <Link href={`/courses/${course.id}`}>
        {/* Course Title */}
        <h3 className={styles.title}>{course.title}</h3>
        {/* Professor */}
        <p className={styles.professor}>Prof. {course.professor}</p>

        {/* Metrics on one line: "overall 4.9  difficulty 1.9" */}
        <p className={styles.metrics}>
          overall <span className={styles.overallValue}>{course.rating}</span>
          &nbsp;&nbsp; difficulty{" "}
          <span className={styles.difficultyValue}>{course.difficulty}</span>
        </p>
      </Link>
    </li>
  );
}
