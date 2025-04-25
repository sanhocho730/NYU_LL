export type Review = {
  id: string;
  user: string;
  comment: string;
  rating: number;
};

export type Course = {
  id: string;
  semester: string;
  code: string;
  department: string;
  credits: number;
  title: string;
  professor: string;
  time: string;
  rating: number;        // overall rating (average)
  difficulty: number;    // overall difficulty (average)
  description: string;
  ratingCount: number;
  reviews: Review[];
};

export const courses: Course[] = [
  {
    id: "1",
    semester: "Fall 2024",
    code: "MATH-UA 112",
    department: "CAS",
    credits: 4,
    title: "Numerical Analysis",
    professor: "Dr. Smith",
    time: "Mon Wed 9:00 am – 10:15 am",
    rating: 4.9,
    difficulty: 2.9,
    description: "Focuses on numerical methods for solving mathematical and scientific problems. Topics include root-finding, interpolation, integration, and more.",
    ratingCount: 25,
    reviews: [
      {
        id: "1",
        user: "Alice",
        comment: "Amazing course! Dr. Smith explains everything clearly.",
        rating: 5,
      },
      {
        id: "2",
        user: "Bob",
        comment: "Lots of homework but very rewarding!",
        rating: 4,
      },
    ],
  },
  {
    id: "2",
    semester: "Fall 2024",
    code: "CSCI-UA 120",
    department: "CAS",
    credits: 3,
    title: "Discrete Mathematics",
    professor: "Prof. Johnson",
    time: "Tue Thu 10:30 am – 11:45 am",
    rating: 3.7,
    difficulty: 2.2,
    description: "An introduction to set theory, combinatorics, logic, and graph theory. Builds foundations for computer science and advanced mathematics.",
    ratingCount: 40,
    reviews: [
      {
        id: "3",
        user: "Charlie",
        comment: "Really good foundation for computer science majors.",
        rating: 5,
      },
      {
        id: "4",
        user: "Dana",
        comment: "Challenging but helpful for algorithm classes later.",
        rating: 4,
      },
    ],
  },
  {
    id: "3",
    semester: "Fall 2024",
    code: "CSCI-UA 102",
    department: "CAS",
    credits: 4,
    title: "Data Structures",
    professor: "Dr. Lee",
    time: "Mon Wed 1:00 pm – 2:15 pm",
    rating: 4.3,
    difficulty: 3.2,
    description: "Covers fundamental data structures (arrays, linked lists, trees, graphs) and associated algorithms like searching and sorting.",
    ratingCount: 50,
    reviews: [
      {
        id: "5",
        user: "Eve",
        comment: "Important course but quite tough!",
        rating: 4,
      },
      {
        id: "6",
        user: "Frank",
        comment: "You need to practice coding a lot.",
        rating: 3,
      },
    ],
  },
  {
    id: "4",
    semester: "Fall 2024",
    code: "CSCI-UA 310",
    department: "Tandon",
    credits: 4,
    title: "Algorithm",
    professor: "Dr. Park",
    time: "Fri 2:00 pm – 4:30 pm",
    rating: 3.0,
    difficulty: 4.0,
    description: "Study of classic algorithmic techniques like divide and conquer, dynamic programming, and greedy algorithms.",
    ratingCount: 32,
    reviews: [
      {
        id: "7",
        user: "Grace",
        comment: "Very theoretical. Good for serious CS students.",
        rating: 3,
      },
      {
        id: "8",
        user: "Hank",
        comment: "Challenging exams but manageable if you practice.",
        rating: 3,
      },
    ],
  },
  {
    id: "5",
    semester: "Fall 2024",
    code: "PSYC-UA 101",
    department: "CAS",
    credits: 3,
    title: "Introduction to Psychology",
    professor: "Dr. Nguyen",
    time: "Tue Thu 3:30 pm – 4:45 pm",
    rating: 4.1,
    difficulty: 2.0,
    description: "A broad overview of human behavior, development, cognition, and mental processes.",
    ratingCount: 47,
    reviews: [
      {
        id: "9",
        user: "Isla",
        comment: "Interesting content and engaging lectures.",
        rating: 4,
      },
      {
        id: "10",
        user: "Leo",
        comment: "Loved the real-life examples in class!",
        rating: 5,
      },
    ],
  },
  {
    id: "6",
    semester: "Fall 2024",
    code: "BUSF-UB 5",
    department: "Stern",
    credits: 3,
    title: "Financial Accounting",
    professor: "Prof. Miller",
    time: "Mon Wed 2:00 pm – 3:15 pm",
    rating: 2.8,
    difficulty: 4.2,
    description: "Introduction to the preparation and interpretation of financial statements.",
    ratingCount: 38,
    reviews: [
      {
        id: "11",
        user: "Nina",
        comment: "Very dry material, but necessary for business.",
        rating: 3,
      },
      {
        id: "12",
        user: "Owen",
        comment: "Professor is helpful, but course is tough.",
        rating: 2,
      },
    ],
  },
  {
    id: "7",
    semester: "Fall 2024",
    code: "IDM-UT 50",
    department: "Tisch",
    credits: 2,
    title: "Interactive Media Workshop",
    professor: "Prof. Rivera",
    time: "Wed 5:00 pm – 7:45 pm",
    rating: 3.6,
    difficulty: 2.5,
    description: "Hands-on course in designing interactive digital experiences with code and sensors.",
    ratingCount: 22,
    reviews: [
      {
        id: "13",
        user: "Sasha",
        comment: "Fun and creative. You get to make cool stuff!",
        rating: 4,
      },
      {
        id: "14",
        user: "Tom",
        comment: "Nice balance of coding and design.",
        rating: 3,
      },
    ],
  },
  {
    id: "8",
    semester: "Fall 2024",
    code: "TECH-UY 2104",
    department: "Tandon",
    credits: 4,
    title: "Introduction to Networking",
    professor: "Dr. Jameson",
    time: "Mon Wed 11:00 am – 12:15 pm",
    rating: 2.4,
    difficulty: 3.8,
    description: "Covers the basics of computer networking, protocols, routing, and internet architecture.",
    ratingCount: 18,
    reviews: [
      {
        id: "15",
        user: "Uma",
        comment: "Challenging but you learn a lot.",
        rating: 3,
      },
      {
        id: "16",
        user: "Victor",
        comment: "Heavy on memorization and concepts.",
        rating: 2,
      },
    ],
  }
];
