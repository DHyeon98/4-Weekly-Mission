import SharedSVG from "@/public/images/share.svg";
import PenSVG from "@/public/images/pen.svg";
import DeleteSVG from "@/public/images/delete.svg";
import { useRecoilValue } from "recoil";
import { clickFolder } from "@/store/store";
import styles from "@/styles/folder/folderTitle.module.css";

export default function FolderTitle() {
  const clickedFolder = useRecoilValue(clickFolder);
  return (
    <div className={styles.folderTitleContainer}>
      <h2>{clickedFolder}</h2>
      {clickedFolder === "전체" ? null : (
        <ul>
          <li>
            <button>
              <SharedSVG alt="공유" />
              공유
            </button>
          </li>
          <li>
            <button>
              <PenSVG alt="이름 변경" />
              이름 변경
            </button>
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
