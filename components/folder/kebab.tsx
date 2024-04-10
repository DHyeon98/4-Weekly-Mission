import styles from "@/styles/folder/kebab.module.css";
import ModalTypeRed from "./modal/modaltypeRed";
import { useState } from "react";
import ModalLinkAdd from "./modal/modalLinkAdd";

export default function KebabModal({ url }: { url: string }) {
  const [modalName, setModalName] = useState<string>("");
  const handleModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    event.preventDefault();
    setModalName(name);
  };
  return (
    <ul className={styles.kebabModal}>
      <li>
        <button onClick={(event) => handleModal(event, "linkDelete")}>
          삭제하기
        </button>
        <ModalTypeRed
          name="링크 삭제"
          isOpen={modalName === "linkDelete"}
          modalText={url}
          setModalName={setModalName}
        />
      </li>
      <li>
        <button onClick={(event) => handleModal(event, "addLinkFolder")}>
          폴더에 추가
        </button>
        <ModalLinkAdd
          url={url}
          setModalName={setModalName}
          isOpen={modalName === "addLinkFolder"}
        />
      </li>
    </ul>
  );
}
