import ModalPortal from "@/components/modal";
import styles from "@/styles/folder/modal/modal.module.css";
import CloseSVG from "@/public/images/close.svg";
import { Dispatch, SetStateAction } from "react";

export default function ModalTypeBlue({
  name,
  isOpen,
  folderName,
  setModalName,
  buttonName,
}: {
  name: string;
  isOpen: boolean;
  folderName?: string | string[];
  setModalName: Dispatch<SetStateAction<string>>;
  buttonName: string;
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
          <form>
            {folderName ? (
              <input type="text" defaultValue={folderName} />
            ) : (
              <input type="text" placeholder="내용 입력" />
            )}
            <button type="button" className={styles.addButton}>
              {buttonName}
            </button>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
}
