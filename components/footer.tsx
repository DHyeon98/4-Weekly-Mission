import Link from "next/link";
import styles from "@/styles/components/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>©codeit - 2023</p>
        <ul>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
        <ul className={styles.logoBox}>
          <li>
            <Link href="https://www.facebook.com/?locale=ko_KR" target="_blank">
              페이스북
            </Link>
          </li>
          <li>
            <Link href="https://twiter.com/?lang=ko" target="_blank">
              트위터
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/" target="_blank">
              유튜브
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/" target="_blank">
              인스타그램
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
