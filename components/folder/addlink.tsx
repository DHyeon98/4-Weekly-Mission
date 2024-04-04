import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/folder/addLink.module.css";
import LinkSVG from "@/public/images/link.svg";
import ModalLinkAdd from "./modal/modalLinkAdd";

export default function AddLink() {
  const [modalName, setModalName] = useState<boolean | string>(false);
  const refValue = useRef<HTMLInputElement>(null);
  const handleModal = () => {
    if (refValue.current) {
      if (!refValue.current.value) {
        alert("링크를 입력해주세요.");
      } else {
        setModalName("addLink");
      }
    }
  };
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
          <button type="button" onClick={handleModal}>
            추가하기
          </button>
          <ModalLinkAdd
            url={refValue.current ? refValue.current.value : ""}
            setModalName={setModalName}
            isOpen={modalName === "addLink"}
          />
        </form>
      </div>
    </article>
  );
}
