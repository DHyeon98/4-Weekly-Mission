import SharedSVG from "@/public/images/share.svg";
import PenSVG from "@/public/images/pen.svg";
import DeleteSVG from "@/public/images/delete.svg";
import styles from "@/styles/folder/folderTitle.module.css";
import { useRouter } from "next/router";
import ModalTypeBlue from "./modal/modalTypeBlue";
import { useState } from "react";
import ModalTypeRed from "./modal/modaltypeRed";
import ModalShare from "./modal/modalShare";

export default function FolderTitle() {
  const [modalName, setModalName] = useState<string>("");
  const router = useRouter();
  const { query } = router;
  const qName = query.name;
  const handleModal = (name: string) => {
    setModalName(name);
  };
  return (
    <div className={styles.folderTitleContainer}>
      <h2>{!qName ? "전체" : qName}</h2>
      {!qName ? null : (
        <ul>
          <li>
            <button onClick={() => handleModal("folderShare")}>
              <SharedSVG alt="공유" />
              공유
            </button>
            <ModalShare
              isOpen={modalName === "folderShare"}
              modalText={qName}
              setModalName={setModalName}
            />
          </li>
          <li>
            <button onClick={() => handleModal("Change")}>
              <PenSVG alt="이름 변경" />
              이름 변경
            </button>
            <ModalTypeBlue
              name="이름 변경"
              folderName={qName}
              isOpen={modalName === "Change"}
              setModalName={setModalName}
              buttonName="변경하기"
            />
          </li>
          <li>
            <button onClick={() => handleModal("folderDelete")}>
              <DeleteSVG alt="삭제" />
              삭제
            </button>
            <ModalTypeRed
              name="폴더 삭제"
              isOpen={modalName === "folderDelete"}
              modalText={qName}
              setModalName={setModalName}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
