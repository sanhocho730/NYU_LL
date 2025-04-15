export type Review = {
    id: string;
    user: string;
    comment: string;
    rating: number; // rating value from 1–5
  };
  
  export type Course = {
    id: string;
    title: string;
    professor: string;
    rating: number;        // overall rating (average)
    difficulty: number;    // overall difficulty (average)
    description: string;
    reviews: Review[];
  };
  
  // In-memory array of courses (for demo purposes)
  export let courses: Course[] = [
    {
      id: "1",
      title: "Numerical Analysis",
      professor: "Dr. Smith",
      rating: 4.9,
      difficulty: 1.9,
      description:
        "Focuses on numerical methods for solving mathematical and scientific problems. Topics include root-finding, interpolation, integration, and more.",
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
      title: "Discrete Mathematics",
      professor: "Prof. Johnson",
      rating: 4.7,
      difficulty: 2.2,
      description:
        "An introduction to set theory, combinatorics, logic, and graph theory. Builds foundations for computer science and advanced mathematics.",
      reviews: [],
    },
    {
      id: "3",
      title: "Data Structures",
      professor: "Dr. Lee",
      rating: 4.3,
      difficulty: 3.2,
      description:
        "Covers fundamental data structures (arrays, linked lists, trees, graphs) and associated algorithms like searching and sorting.",
      reviews: [],
    },

    {
        id: "4",
        title: "Algorithm",
        professor: "Dr. Park",
        rating: 3.0,
        difficulty: 4.0,
        description:
          "Covers fundamental data structures (arrays, linked lists, trees, graphs) and associated algorithms like searching and sorting.",
        reviews: [],
      },
  ];