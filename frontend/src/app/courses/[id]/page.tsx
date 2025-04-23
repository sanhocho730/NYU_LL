// src/app/courses/[id]/page.tsx
import { notFound } from "next/navigation";
import styles from "./page.module.scss";
import RatingDistribution from "./components/RatingDistribution";
import ReviewCard from "./components/ReviewCard";

type Review = {
  id: string;
  user: string;
  comment: string;
  rating: number;
  difficulty: number;
  amountOfWork: number;
  clarity: number;
};

type Course = {
  id: string;
  title: string;
  professor: string;
  code: string;          
  semester: string;       
  rating: number;         // average
  difficulty: number;     // average
  description: string;
  reviews: Review[];
};

async function getCourseById(id: string): Promise<Course | null> {
  // NOTE: Use absolute URL in server components
  const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;           // await params per Next.js 13
  const course = await getCourseById(id);
  if (!course) notFound();

  // Build rating distribution from reviews
  const distribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating: rating.toString(),
    count: course.reviews.filter((r) => r.rating === rating).length,
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Course Detail</h1>

      <div className={styles.topSection}>
        <RatingDistribution data={distribution} />

        <div className={styles.infoPanel}>
          <div className={styles.overallScore}>
            <span className={styles.scoreValue}>{course.rating.toFixed(1)}</span>
            <span className={styles.scoreMax}>/5</span>
          </div>
          <div className={styles.semesterCode}>
            {course.semester} &nbsp;&mdash;&nbsp; {course.code}
          </div>
          <h2 className={styles.courseTitle}>{course.title}</h2>

          <h3 className={styles.subheader}>Course Description</h3>
          <p className={styles.description}>{course.description}</p>

          <button className={styles.rateButton}>
            Rate This Course &rarr;
          </button>
        </div>
      </div>

      <section className={styles.reviewsSection}>
        <h2 className={styles.reviewsHeader}>Ratings</h2>
        {course.reviews.length ? (
          course.reviews.map((r) => <ReviewCard key={r.id} review={r} />)
        ) : (
          <p>No reviews yet.</p>
        )}
      </section>
    </div>
  );
}
