// src/app/components/Quality/Quality.tsx
import styles from "./Quality.module.scss";

export type QualityProps = {
  category?: string;
  rating: number;
};

export default function Quality({ category = "Quality", rating }: QualityProps) {
  let bg = "#BCFFC6";       // ≥5 
  if (rating < 3) bg = "#FF9090";       // <3
  else if (rating < 5) bg = "#FFCD90";  // [3,5)

  return (
    <div className={styles.main}>
      <p className={styles.label}>{category}</p>
      <h1 className={styles.bubble} style={{ backgroundColor: bg }}>
        {rating.toFixed(1)}
      </h1>
    </div>
  );
}
