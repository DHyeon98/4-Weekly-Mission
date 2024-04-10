import styles from "@/styles/shared/userTitle.module.css";
import { SharedTypes } from "@/types/shared/type";
import Image from "next/image";

export default function UserTitle({ contents }: { contents: SharedTypes }) {
  return (
    <article className={styles.userTitle}>
      <div>
        <div className={styles.titleTop}>
          <Image
            width={60}
            height={60}
            src={contents?.owner?.profileImageSource}
            alt="사용자 이미지"
          />
          <p>{contents?.owner?.name}</p>
        </div>
        <div className={styles.titleBottom}>
          <h2>{contents.name}</h2>
        </div>
      </div>
    </article>
  );
}
