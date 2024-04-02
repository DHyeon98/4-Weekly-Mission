import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/folder/addLink.module.css";
import LinkSVG from "@/public/images/link.svg";

export default function AddLink() {
  const refValue = useRef<HTMLInputElement>(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <article className={styles.addLinkCon} ref={ref}>
      <div className={inView ? "" : `${styles.on}`}>
        <form className={styles.addLinkForm}>
          <label htmlFor="addLink">
            <LinkSVG alt="링크 추가" />
          </label>
          <input
            className={styles.addLinkInput}
            ref={refValue}
            id="addLink"
            type="text"
            placeholder="링크를 추가해 보세요."
          />
          <button type="button">추가하기</button>
        </form>
      </div>
    </article>
  );
}
