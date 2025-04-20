import React from "react";
import styles from "./ReviewCard.module.scss";

export type Review = {
  id: string;
  user: string;
  comment: string;
  rating: number;       // overall quality
  difficulty: number;
  amountOfWork: number;
  clarity: number;
};

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className={styles.card}>
      <div className={styles.tags}>
        <span className={styles.tag}>Difficulty: {review.difficulty}</span>
        <span className={styles.tag}>Work: {review.amountOfWork}</span>
        <span className={styles.tag}>Clarity: {review.clarity}</span>
      </div>
      <p className={styles.comment}>{review.comment}</p>
      <div className={styles.quality}>
        <span>Quality</span>
        <div className={styles.qualityValue}>{review.rating}</div>
      </div>
    </div>
  );
}
