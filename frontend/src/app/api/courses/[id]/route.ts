// src/app/api/courses/[id]/route.ts

import { NextResponse } from "next/server";
import { courses, Review } from "../../../lib/courses";

export async function GET(request: Request, context: any) {
  // await the context to ensure params is resolved
  const { params } = await context;
  const { id } = params as { id: string };

  const course = courses.find((c) => c.id === id);
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}

export async function POST(request: Request, context: any) {
  // again, await context
  const { params } = await context;
  const { id } = params as { id: string };

  try {
    const { user, comment, rating } = await request.json();
    const course = courses.find((c) => c.id === id);
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
    return NextResponse.json(newReview, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid review data" }, { status: 400 });
  }
}
