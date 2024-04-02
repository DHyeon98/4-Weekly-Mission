import SharedSVG from "@/public/images/share.svg";
import PenSVG from "@/public/images/pen.svg";
import DeleteSVG from "@/public/images/delete.svg";
import styles from "@/styles/folder/folderTitle.module.css";
import { useRouter } from "next/router";

export default function FolderTitle() {
  const router = useRouter();
  const { query } = router;
  const qName = query.name;
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
