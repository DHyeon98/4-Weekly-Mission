import styles from "@/styles/login/loginHeader.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginHeader() {
  return (
    <div className={styles.loginHeader}>
      <div className={styles.loginHeaderImg}>
        <Image fill src="/images/loginLogo.png" alt="linkbrary" />
      </div>
      <p>
        회원이 아니신가요?
        <Link href={"/signup"}>회원 가입하기</Link>
      </p>
    </div>
  );
}
