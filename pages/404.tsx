import styles from "@/styles/notFound.module.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <p>없는 페이지 입니다.</p>
      <Link href={"/"}>홈으로</Link>
    </div>
  );
}
