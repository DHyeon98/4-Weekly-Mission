import SharedSVG from "@/public/images/share.svg";
import PenSVG from "@/public/images/pen.svg";
import DeleteSVG from "@/public/images/delete.svg";
import styles from "@/styles/folder/folderTitle.module.css";
import { useRouter } from "next/router";
import ModalTypeBlue from "./modal/modalTypeBlue";
import { useState } from "react";

export default function FolderTitle() {
  const [modalName, setModalName] = useState<string | boolean>(false);
  const router = useRouter();
  const { query } = router;
  const qName = query.name;
  const handleModal = () => {
    setModalName("Change");
  };
  return (
    <div className={styles.folderTitleContainer}>
      <h2>{!qName ? "전체" : qName}</h2>
      {!qName ? null : (
        <ul>
          <li>
            <button>
              <SharedSVG alt="공유" />
              공유
            </button>
          </li>
          <li>
            <button onClick={handleModal}>
              <PenSVG alt="이름 변경" />
              이름 변경
            </button>
            <ModalTypeBlue
              name="이름 변경"
              folderName={qName}
              isOpen={modalName === "Change"}
              setModalName={setModalName}
            />
          </li>
          <li>
            <button>
              <DeleteSVG alt="삭제" />
              삭제
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
