import styles from "@/styles/card.module.css";
import Image from "next/image";
import { timeChange, dateChange } from "@/utils/dateFunction";
import { SharedLink } from "@/types/shared/type";
import { AllFolder } from "@/types/folder/type";
import { useEffect, useRef, useState } from "react";
import KebabModal from "./folder/kebab";

export default function Card({
  url,
  imageSource,
  title,
  createdAt,
  description,
}: SharedLink | AllFolder) {
  const [kebabOpen, setKebabOpen] = useState(false);
  const kebabRef = useRef<HTMLImageElement>(null);
  const handleKebab = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setKebabOpen(!kebabOpen);
  };
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
        <button type="button" onClick={(event) => handleKebab(event)}>
          <Image ref={kebabRef} fill src={`/images/kebab.png`} alt="더보기" />
        </button>
        <span>{createdAt && timeChange(createdAt)}</span>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{createdAt && dateChange(createdAt)}</p>
        {kebabOpen ? <KebabModal /> : null}
      </div>
    </a>
  );
}
