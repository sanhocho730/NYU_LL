import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseList from "./components/CourseList";
import FilterControls from "./components/FilterControls";
import coursesData from "./data/courses";

function App() {
  // State for filtering by school
  const [schoolFilter, setSchoolFilter] = useState("");

  // State for search text
  const [searchText, setSearchText] = useState("");

  // Extract unique schools for the dropdown
  const schoolOptions = [...new Set(coursesData.map((c) => c.school))];

  // Top-rated: sort by rating descending, take first 3
  const topRatedCourses = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  // Low-difficulty: sort by difficulty ascending, take first 3
  const lowDifficultyCourses = [...coursesData]
    .sort((a, b) => a.difficulty - b.difficulty)
    .slice(0, 3);

  // Filter by school
  let filteredCourses = schoolFilter
    ? coursesData.filter((c) => c.school === schoolFilter)
    : coursesData;

  // Filter by search text (matches course name or professor)
  if (searchText.trim() !== "") {
    const text = searchText.toLowerCase();
    filteredCourses = filteredCourses.filter(
      (c) =>
        c.name.toLowerCase().includes(text) ||
        c.professor.toLowerCase().includes(text)
    );
  }

  return (
    <div className="app-container">
      {/* Header with search bar and login button */}
      <Header onSearch={setSearchText} />

      {/* Top-Rated Courses Section */}
      <section className="section-block">
        <h2>Top-Rated Courses</h2>
        <CourseList courses={topRatedCourses} />
      </section>

      {/* Low-Difficulty Courses Section */}
      <section className="section-block">
        <h2>Low-Difficulty Courses</h2>
        <CourseList courses={lowDifficultyCourses} />
      </section>

      {/* Select a School & Filtered Courses */}
      <section className="section-block">
        <h2>Select a School</h2>
        <FilterControls
          schools={schoolOptions}
          onSchoolChange={setSchoolFilter}
        />
        <CourseList courses={filteredCourses} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;