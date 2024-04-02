import { buttonDataApi } from "@/apis/apiFolder";
import { FolderList } from "@/types/folder/type";
import { useEffect, useState } from "react";
import styles from "@/styles/folder/folderButton.module.css";
import Link from "next/link";
import { clickFolder } from "@/store/store";
import { useRecoilState } from "recoil";
interface Props {
  data: FolderList[];
}
export default function FolderButton() {
  const [buttonData, setButtonData] = useState<Props>();
  const [clickedFolder, setClickedFolder] = useRecoilState(clickFolder);
  const handleFolderClick = (name: string) => {
    setClickedFolder(name);
  };
  useEffect(() => {
    buttonDataApi().then((data) => setButtonData(data));
  }, []);
  if (!buttonData) return null;
  return (
    <div className={styles.buttonContainer}>
      <ul className={styles.buttonBox}>
        <li>
          <button
            className={clickedFolder === "전체" ? `${styles.on}` : ""}
            onClick={() => handleFolderClick("전체")}
          >
            <Link href={"/folder"}>전체</Link>
          </button>
        </li>
        {buttonData.data.map(({ name, id }) => {
          return (
            <li key={id}>
              <button
                className={clickedFolder === name ? `${styles.on}` : ""}
                onClick={() => handleFolderClick(name)}
              >
                <Link href={`?folderId=${id}`}>{name}</Link>
              </button>
            </li>
          );
        })}
      </ul>
      <button className={styles.addButton}>폴더 추가</button>
    </div>
  );
}
