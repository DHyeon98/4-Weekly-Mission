import { buttonDataApi } from "@/apis/apiFolder";
import { FolderList } from "@/types/folder/type";
import { useEffect, useState } from "react";
import styles from "@/styles/folder/folderButton.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import FolderTitle from "./folderTitle";
import ModalTypeBlue from "./modal/modalTypeBlue";
interface Props {
  data: FolderList[];
}
export default function FolderButton() {
  const [buttonData, setButtonData] = useState<Props>();
  const [modalName, setModalName] = useState<boolean | string>(false);
  const router = useRouter();
  const { query } = router;
  const qValue = query.folderId;
  const handleModal = () => {
    setModalName("folderAdd");
  };
  useEffect(() => {
    buttonDataApi().then((data) => setButtonData(data));
  }, []);
  if (!buttonData) return null;
  return (
    <>
      <div className={styles.buttonContainer}>
        <ul className={styles.buttonBox}>
          <li>
            <button className={!qValue ? `${styles.on}` : ""}>
              <Link href={"/folder"}>전체</Link>
            </button>
          </li>
          {buttonData.data.map(({ name, id }) => {
            return (
              <li key={id}>
                <button className={Number(qValue) === id ? `${styles.on}` : ""}>
                  <Link href={`?folderId=${id}&name=${name}`}>{name}</Link>
                </button>
              </li>
            );
          })}
        </ul>
        <button className={styles.addButton} onClick={handleModal}>
          폴더 추가
        </button>
        <ModalTypeBlue
          name={"폴더 추가"}
          isOpen={modalName === "folderAdd"}
          setModalName={setModalName}
        />
      </div>
      <FolderTitle />
    </>
  );
}
