import styles from "@/styles/login/input.module.css";
import { useForm, useWatch } from "react-hook-form";
import {
  EmailCheckApi,
  LoginData,
  LoginType,
  SignUpType,
} from "@/apis/apiLogin";
import LoginInput from "./loginInput";
import ButtonToggle from "./buttonToggle";
export default function SignUpForm() {
  const {
    handleSubmit,
    setError,
    getValues,
    watch,
    register,
    formState: { errors },
  } = useForm<SignUpType>({
    shouldFocusError: false,
    mode: "onBlur",
  });
  async function onSignin(data: LoginType) {
    try {
      const result = await LoginData(data);
      console.log(result);
    } catch (error) {
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
    }
  }
  const test = watch("password");
  console.log(test);
  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSignin)}>
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
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "올바른 이메일 주소가 아닙니다.",
            },
            validate: async (EmailData: string) => {
              try {
                await EmailCheckApi(EmailData);
                console.log(getValues("password"));
              } catch (error) {
                return "이미 사용 중인 이메일입니다.";
              }
            },
          }}
        />
        <LoginInput
          name="password"
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          validation={{
            required: {
              value: true,
              message: "비밀번호를 입력해 주세요",
            },
            pattern: {
              value: /(?=.*[a-zA-Z])(?=.*\d).{8,}/,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            },
          }}
        />
        <LoginInput
          name="pwfirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          validation={{
            required: {
              value: true,
              message: "비밀번호를 입력해 주세요",
            },
            validate: (value) =>
              value === watch("password") ? "" : "비밀번호가 일치하지 않아요.",
          }}
        />
        <input className={styles.submitButton} type="submit" value="회원가입" />
      </form>
    </>
  );
}
