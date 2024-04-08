import LoginForm from "@/components/form/loginForm";
import LoginHeader from "@/components/login/loginHeader";
import LoginFooter from "@/components/login/loginFooter";
import styles from "@/styles/login/input.module.css";
export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}
