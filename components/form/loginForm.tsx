import styles from "@/styles/login/input.module.css";
import { useForm } from "react-hook-form";
import { LoginData } from "@/apis/apiLogin";
import LoginInput from "./loginInput";
type LoginType = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const { handleSubmit, setError } = useForm<LoginType>({
    shouldFocusError: false,
    mode: "onBlur",
  });
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  async function onLogin(data: LoginType) {
    try {
      const result = await LoginData(data);
      localStorage.setItem("accessToken", result.data.accessToken);
    } catch (error) {
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
    }
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onLogin)}>
      <LoginInput
        name="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요."
        validation={{
          required: {
            value: true,
            message: "이메일을 입력해 주세요",
          },
          pattern: {
            value: emailRegex,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        }}
      />
      <LoginInput
        name="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        validation={{
          required: {
            value: true,
            message: "비밀번호를 입력해 주세요",
          },
          minLength: {
            value: 8,
            message: "비밀번호를 확인해 주세요.",
          },
        }}
      />
      <input className={styles.submitButton} type="submit" value="로그인" />
    </form>
  );
}
