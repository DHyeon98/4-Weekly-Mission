import styles from "@/styles/login/loginHeader.module.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginHeader({ type }: { type: string }) {
  const buttonText = type === "signIn" ? "회원 가입하기" : "로그인 하기";
  const linkHref = type === "signIn" ? "/signup" : "/signin";
  return (
    <div className={styles.loginHeader}>
      <div className={styles.loginHeaderImg}>
        <Image
          fill
          sizes="width: 210.5px "
          src="/images/loginLogo.png"
          alt="linkbrary"
          priority
        />
      </div>
      <p>
        {type === "signIn" ? "회원이 아니신가요?" : "이미 회원이신가요?"}
        <Link href={linkHref}>{buttonText}</Link>
      </p>
    </div>
  );
}
