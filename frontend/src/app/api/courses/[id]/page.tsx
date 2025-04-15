// src/app/courses/[id]/page.tsx

import { notFound } from "next/navigation";

type Course = {
  id: string;
  title: string;
  professor: string;
  rating: number;
  difficulty: number;
  description: string;
  reviews: {
    id: string;
    user: string;
    comment: string;
    rating: number;
  }[];
};

async function getCourseById(id: string): Promise<Course | null> {
    
  const res = await fetch(`/api/courses/${id}`, { cache: "no-store" });

  if (!res.ok) return null;
  return res.json();
}

interface CourseDetailProps {
  params: { id: string };
}

export default async function CourseDetailPage({ params }: CourseDetailProps) {
  const course = await getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{course.title}</h1>
      <p>Professor: {course.professor}</p>
      <p>Overall Rating: {course.rating}</p>
      <p>Difficulty: {course.difficulty}</p>
      <p>Description: {course.description}</p>

      <hr />
      <h2>Reviews</h2>
      {course.reviews.length ? (
        course.reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: "1rem" }}>
            <p>
              <strong>{review.user}</strong> rated {review.rating}
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
