import styles from "@/styles/card.module.css";
import Image from "next/image";
import { timeChange, dateChange } from "@/utils/dateFunction";
import { SharedLink } from "@/types/shared/type";
import { AllFolder } from "@/types/folder/type";

export default function Card({
  url,
  imageSource,
  title,
  createdAt,
  description,
}: SharedLink | AllFolder) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={styles.imgBox}>
        <img
          className={styles.contentsImg}
          src={imageSource ? imageSource : `/images/noImage.jpg`}
          alt={title}
        />
      </div>
      <div className={styles.textBox}>
        <button type="button">
          <Image fill src={`/images/kebab.png`} alt="더보기" />
        </button>
        <span>{createdAt && timeChange(createdAt)}</span>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{createdAt && dateChange(createdAt)}</p>
      </div>
    </a>
  );
}
