import { SharedLink } from "@/types/shared/type";
import styles from "@/styles/components/card.module.css";
import Card from "../card";

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
                <Card
                  title={title}
                  url={url}
                  description={description}
                  imageSource={imageSource}
                  createdAt={createdAt}
                />
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
}

export default SharedContents;
