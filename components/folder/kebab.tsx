import styles from "@/styles/folder/kebab.module.css";

export default function KebabModal() {
  return (
    <ul className={styles.kebabModal}>
      <li>
        <button>삭제하기</button>
      </li>
      <li>
        <button>폴더에 추가</button>
      </li>
    </ul>
  );
}
