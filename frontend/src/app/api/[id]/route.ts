import { NextResponse } from "next/server";
import { courses, Review } from "../../lib/courses";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const course = courses.find((c) => c.id === id);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { user, comment, rating } = await request.json();
    const course = courses.find((c) => c.id === params.id);
    if (!course) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    const newReview: Review = {
      id: (course.reviews.length + 1).toString(),
      user,
      comment,
      rating: Number(rating),
    };

    course.reviews.push(newReview);

    // (Optional) Recalculate average rating if desired

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid review data" }, { status: 400 });
  }
}