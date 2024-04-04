import LoginInput from "@/components/form/loginInput";
import styles from "@/styles/login/login.module.css";
export default function Login() {
  return (
    <form className={styles.loginForm}>
      <LoginInput />
    </form>
  );
}
