import React from "react";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-title">{course.name}</div>
      <div className="course-prof">Professor: {course.professor}</div>
      <div>School: {course.school}</div>
      <div>Rating: {course.rating}</div>
      <div>Difficulty: {course.difficulty}</div>
    </div>
  );
}

export default CourseCard;