export {};

declare global {
    type RatingTagProps = {
        category: string,
        value: number,
    }

    type RatingCardPropType = {
        tagList: Array<RatingTagProps>,
        comment: string,
        rating: number,
    }

    type SearchCourseCardProp = {
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
      }

    type QualityPropType = {
        category?: string,
        rating: number,
    }

    type CourseCardPropType = {
        id: number,
        title: string,
        professor: string,
        quality: number,
        difficulty: number,
    }
      
}