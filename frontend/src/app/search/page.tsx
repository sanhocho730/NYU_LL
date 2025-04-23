// src/app/search/page.tsx
"use client";

import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import SearchCourseCard from "../components/SearchCourseCard/SearchCourseCard";

interface CourseOverview {
  id: string;
  semester: string;
  code: string;
  department: string;
  credits: number;
  title: string;
  professor: string;
  time: string;
  rating: number;
  difficulty: number;
  ratingCount: number;
}

export default function SearchPage() {
  const [courses, setCourses] = useState<CourseOverview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedProf, setSelectedProf] = useState("");
  const [selectedCredit, setSelectedCredit] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("/api/courses", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json() as Promise<CourseOverview[]>;
      })
      .then(setCourses)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = courses
    .filter((c) => {
      const term = searchKeyword.toLowerCase();
      return (
        c.title.toLowerCase().includes(term) ||
        c.code.toLowerCase().includes(term) ||
        c.professor.toLowerCase().includes(term)
      );
    })
    .filter((c) => (selectedDept ? c.department === selectedDept : true))
    .filter((c) => (selectedProf ? c.professor === selectedProf : true))
    .filter((c) => {
      if (!selectedCredit) return true;
      if (selectedCredit === "< 2") return c.credits < 2;
      if (selectedCredit === "> 4") return c.credits > 4;
      return c.credits === Number(selectedCredit);
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "difficulty") return a.difficulty - b.difficulty;
      return 0;
    });

  if (loading) return <p className={styles.status}>Loading…</p>;
  if (error) return <p className={styles.status}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/search">Course Search</Link>
        </h1>

        <input
          type="text"
          placeholder="Search by Course, Code, Professor…"
          className={styles.searchbar}
          value={searchKeyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchKeyword(e.target.value)
          }
        />

        <div className={styles.filterRow}>
          {/* Department dropdown */}
          <select
            className={styles.dropdown}
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="">Department</option>
            {["CAS", "SPS", "Stern", "Tisch", "Tandon"].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          {/* Professor dropdown */}
          <select
            className={styles.dropdown}
            value={selectedProf}
            onChange={(e) => setSelectedProf(e.target.value)}
          >
            <option value="">Professor</option>
            {[...new Set(courses.map((c) => c.professor))].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          {/* Credits dropdown */}
          <select
            className={styles.dropdown}
            value={selectedCredit}
            onChange={(e) => setSelectedCredit(e.target.value)}
          >
            <option value="">Credits</option>
            {["< 2", "2", "3", "4", "> 4"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Sort dropdown */}
          <select
            className={`${styles.dropdown} ${styles.sortby}`}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By…</option>
            <option value="rating">High Rating</option>
            <option value="difficulty">Low Difficulty</option>
          </select>
        </div>
      </header>

      <ul className={styles.cardList}>
        {filtered.map((course) => (
          <li key={course.id}>
            {/* now course has a `rating` field */}
            <SearchCourseCard {...course} />
          </li>
        ))}
        {filtered.length === 0 && (
          <p className={styles.noResults}>No courses found.</p>
        )}
      </ul>
    </div>
  );
}
