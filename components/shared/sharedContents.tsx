import { SharedLink } from "@/types/shared/type";
import { timeChange, dateChange } from "@/utils/dateFunction";
import styles from "@/styles/shared/sharedContents.module.css";
import Image from "next/image";

function SharedContents({ contents }: { contents: SharedLink[] }) {
  return (
    <article>
      <ul className={styles.contentsBox}>
        {contents?.map(
          ({
            id,
            title,
            imageSource,
            createdAt,
            url,
            description,
          }: SharedLink) => {
            return (
              <li key={id}>
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
                    <span>{timeChange(createdAt)}</span>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.date}>{dateChange(createdAt)}</p>
                  </div>
                </a>
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
}

export default SharedContents;
