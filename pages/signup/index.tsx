import LoginForm from "@/components/form/loginForm";
import LoginHeader from "@/components/login/loginHeader";
import LoginFooter from "@/components/login/loginFooter";
import styles from "@/styles/login/input.module.css";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();

  // if (localStorage.getItem("accessToken")) {
  //   router.push("/folder");
  // }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <LoginHeader type="signUp" />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}
