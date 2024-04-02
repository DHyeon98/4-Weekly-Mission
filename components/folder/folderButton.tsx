import { buttonDataApi } from "@/apis/apiFolder";
import { FolderList } from "@/types/folder/type";
import { useEffect, useState } from "react";
import styles from "@/styles/folder/folderButton.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import FolderTitle from "./folderTitle";
interface Props {
  data: FolderList[];
}
export default function FolderButton() {
  const [buttonData, setButtonData] = useState<Props>();
  const router = useRouter();
  const { query } = router;
  const qValue = query.folderId;
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
        <button className={styles.addButton}>폴더 추가</button>
      </div>
      <FolderTitle />
    </>
  );
}
