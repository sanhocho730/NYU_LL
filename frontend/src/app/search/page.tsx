"use client";
import styles from "./page.module.scss";
import { SearchCourseCard } from "../components";
import { useState } from "react";
import Link from "next/link";

type Course = {
  id: string;
  semester: string;
  code: string;
  department: string;
  credits: number;
  title: string;
  professor: string;
  time: string;
  quality: number;
  difficulty: number;
  ratingCount: number;
};

const mockCourses: Course[] = [
  {
    id: "1",
    semester: "Fall 2024",
    code: "MATH-UA 112",
    department: "CAS",
    credits: 4,
    title: "NUMERICAL ANALYSIS",
    professor: "Wenzheng Shi",
    time: "Mon Wed, 9:00 am – 10:15 am",
    quality: 3.6,
    difficulty: 2.7,
    ratingCount: 13
  },
  {
    id: "2",
    semester: "Fall 2024",
    code: "CSCI-UA 101",
    department: "Tandon",
    credits: 4,
    title: "INTRO TO COMPUTER SCIENCE",
    professor: "Jane Doe",
    time: "Tue Thu, 10:30 am – 11:45 am",
    quality: 4.2,
    difficulty: 1.6,
    ratingCount: 42
  },
  {
    id: "3",
    semester: "Fall 2024",
    code: "BUSN-UB 1",
    department: "Stern",
    credits: 3,
    title: "FINANCIAL ACCOUNTING",
    professor: "John Smith",
    time: "Mon, 6:00 pm – 8:30 pm",
    quality: 4.7,
    difficulty: 3.1,
    ratingCount: 19
  },
  {
    id: "4",
    semester: "Fall 2024",
    code: "ARTS-UG 150",
    department: "Tisch",
    credits: 2,
    title: "INTRODUCTION TO DIGITAL MEDIA",
    professor: "Elena Park",
    time: "Tue, 2:00 pm – 4:45 pm",
    quality: 4.5,
    difficulty: 2.1,
    ratingCount: 42
  },
  {
    id: "5",
    semester: "Fall 2024",
    code: "ENGR-UY 2504",
    department: "Tandon",
    credits: 4,
    title: "THERMODYNAMICS",
    professor: "Michael Chen",
    time: "Mon Wed, 1:00 pm – 2:15 pm",
    quality: 2.8,
    difficulty: 4.3,
    ratingCount: 18
  },
  {
    id: "6",
    semester: "Fall 2024",
    code: "PSYC-UA 1",
    department: "CAS",
    credits: 3,
    title: "INTRO TO PSYCHOLOGY",
    professor: "Ava Thompson",
    time: "Wed, 6:20 pm – 9:00 pm",
    quality: 3.9,
    difficulty: 3.1,
    ratingCount: 63
  }
];



export default function SearchPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedProf, setSelectedProf] = useState("");
  const [selectedCredit, setSelectedCredit] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredCourses = mockCourses
    .filter(course =>
      course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      course.code.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchKeyword.toLowerCase())
    )
    .filter(course => !selectedDept || course.department === selectedDept)
    .filter(course => !selectedProf || course.professor === selectedProf)
    .filter(course => {
      if (!selectedCredit) return true;
      if (selectedCredit === "< 2") return course.credits < 2;
      if (selectedCredit === "> 4") return course.credits > 4;
      return course.credits === Number(selectedCredit);
    })
    .sort((a, b) => {
      if (sortBy === "quality") return b.quality - a.quality;
      if (sortBy === "difficulty") return a.difficulty - b.difficulty;
      return 0;
    });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/search" className={styles.title}>
          Course Search
        </Link>
      </h1>

      <input
        type="text"
        placeholder="Search by Course Name, Code Number, Professor …"
        className={styles.searchbar}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <div className={styles.filterRow}>
        <select className={styles.dropdown} onChange={(e) => setSelectedDept(e.target.value)}>
          <option value="">Department</option>
          <option value="CAS">CAS</option>
          <option value="SPS">SPS</option>
          <option value="Stern">Stern</option>
          <option value="Tisch">Tisch</option>
          <option value="Tandon">Tandon</option>
        </select>

        <select className={styles.dropdown} onChange={(e) => setSelectedProf(e.target.value)}>
          <option value="">Professor</option>
          <option value="Wenzheng Shi">Wenzheng Shi</option>
          <option value="Jane Doe">Jane Doe</option>
          <option value="John Smith">John Smith</option>
        </select>

        <select className={styles.dropdown} onChange={(e) => setSelectedCredit(e.target.value)}>
          <option value="">Credits</option>
          <option value="< 2">&lt; 2</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="> 4">&gt; 4</option>
        </select>

        <select className={styles.dropdown} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="quality">High Quality</option>
          <option value="difficulty">Low Difficulty</option>
        </select>
      </div>

      <div className={styles.cardList}>
        {filteredCourses.map((course) => (
          <SearchCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}