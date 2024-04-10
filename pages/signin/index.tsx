import LoginForm from "@/components/form/loginForm";
import LoginHeader from "@/components/login/loginHeader";
import LoginFooter from "@/components/login/loginFooter";
import styles from "@/styles/login/input.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    }
  }, []);
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <LoginHeader type="signIn" />
        <LoginForm />
        <LoginFooter type="signIn" />
      </div>
    </div>
  );
}
