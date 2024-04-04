import ModalPortal from "@/components/modal";
import styles from "@/styles/folder/modal/modal.module.css";
import CloseSVG from "@/public/images/close.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { buttonDataApi } from "@/apis/apiFolder";
import CheckSVG from "@/public/images/check.svg";

export default function ModalLinkAdd({
  isOpen,
  url,
  setModalName,
}: {
  isOpen: boolean;
  url: string;
  setModalName: Dispatch<SetStateAction<boolean | string>>;
}) {
  const [folder, setFolder] = useState([]);
  const [check, setCheck] = useState("");
  const handelClose = () => {
    setModalName(false);
  };
  const handleCheck = (name: string) => {
    setCheck(name);
  };
  useEffect(() => {
    buttonDataApi().then((folderData) => setFolder(folderData.data));
  }, []);
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={styles.modalCon}>
        <div className={styles.modalBox}>
          <h4>폴더에 추가</h4>
          <button className={styles.deleteModal} onClick={handelClose}>
            <CloseSVG alt="닫기 버튼" />
          </button>
          <p className={styles.modalText}>{url}</p>
          <ul className={styles.folderAddModal}>
            {folder?.map(
              ({
                name,
                id,
                link,
              }: {
                name: string;
                id: number;
                link: { count: number };
              }) => {
                const count = link.count;
                return (
                  <li
                    key={id}
                    className={check === name ? `${styles.on}` : ""}
                    onClick={() => handleCheck(name)}
                  >
                    <p>
                      {name} <span>{count}개 링크</span>
                    </p>
                    <CheckSVG alt="체크 아이콘" />
                  </li>
                );
              }
            )}
          </ul>
          <button type="button" className={styles.addButton}>
            추가하기
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}
