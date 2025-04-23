import { NextResponse } from "next/server";
import { courses, Course } from "../../lib/courses";

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  try {
    const { title, professor, rating, difficulty, description } = await request.json();

    const newCourse: Course = {
      id: (courses.length + 1).toString(),
      title,
      professor,
      rating: Number(rating),
      difficulty: Number(difficulty),
      description,
      reviews: [],
    };

    courses.push(newCourse);
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid course data" }, { status: 400 });
  }
}