import ModalPortal from "@/components/modal";
import styles from "@/styles/folder/modal/modal.module.css";
import CloseSVG from "@/public/images/close.svg";
import { Dispatch, SetStateAction } from "react";

export default function ModalTypeRed({
  name,
  isOpen,
  modalText,
  setModalName,
}: {
  name: string;
  isOpen: boolean;
  modalText: string | string[];
  setModalName: Dispatch<SetStateAction<string>>;
}) {
  const handelClose = () => {
    setModalName("");
  };
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={styles.modalCon}>
        <div className={styles.modalBox}>
          <h4>{name}</h4>
          <button className={styles.deleteModal} onClick={handelClose}>
            <CloseSVG alt="닫기 버튼" />
          </button>
          <p className={styles.modalText}>{modalText}</p>
          <button type="button" className={`${styles.addButton} ${styles.red}`}>
            삭제하기
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}
