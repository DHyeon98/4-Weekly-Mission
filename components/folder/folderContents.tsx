import styles from "@/styles/card.module.css";
import { AllFolder } from "@/types/folder/type";
import Card from "../card";

export default function FolderContents({
  contents,
}: {
  contents: AllFolder[];
}) {
  return (
    <article>
      <ul className={styles.contentsBox}>
        {contents?.map(
          ({
            id,
            title,
            image_source,
            created_at,
            url,
            description,
          }: AllFolder) => {
            return (
              <li key={id}>
                <Card
                  title={title}
                  url={url}
                  description={description}
                  imageSource={image_source}
                  createdAt={created_at}
                />
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
}
