import LoginHeader from "@/components/login/loginHeader";
import LoginFooter from "@/components/login/loginFooter";
import styles from "@/styles/login/input.module.css";
import { useRouter } from "next/router";
import SignUpForm from "@/components/form/signupForm";
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
        <LoginHeader type="signUp" />
        <SignUpForm />
        <LoginFooter type="signUp" />
      </div>
    </div>
  );
}
