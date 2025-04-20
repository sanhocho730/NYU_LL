export {};

declare global {
    type CourseDetail = {
        id: number,
        quality: number,
        semester: string,
        code: string,
        title: string, 
        professor: string,
        description: string,
        ratings: Array<RatingCardPropType>,
    }

    type CourseOverview = {
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
}