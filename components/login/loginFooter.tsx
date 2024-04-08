import styles from "@/styles/login/loginFooter.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginFooter() {
  return (
    <div className={styles.loginFooter}>
      <p>소셜 로그인</p>
      <ul>
        <li>
          <Link href={"https://www.google.com"} target="_blank">
            <Image fill src={"/images/google.png"} alt="구글로 로그인" />
          </Link>
        </li>
        <li>
          <Link href={"https://www.kakaocorp.com/page"} target="_blank">
            <Image fill src={"/images/kakao.png"} alt="카카오로 로그인" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
