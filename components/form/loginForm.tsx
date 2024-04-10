import styles from "@/styles/login/input.module.css";
import { useForm } from "react-hook-form";
import { LoginData, LoginType } from "@/apis/apiLogin";
import ButtonToggle from "./buttonToggle";
import { useState } from "react";

export default function LoginForm() {
  // password input 변수
  const [buttonToggle, setButtonToggle] = useState(true);

  // useForm 선언
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm<LoginType>({
    shouldFocusError: false,
    mode: "onBlur",
  });

  // 로그인 스크립트
  async function onLogin(data: LoginType) {
    try {
      const result = await LoginData(data);
      console.log(result);
      localStorage.setItem("accessToken", result.data.accessToken);
    } catch (error) {
      console.log(error);
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
    }
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onLogin)}>
      <div className={styles.commonInput}>
        {/* 이메일 */}
        <label>이메일</label>
        <div style={{ position: "relative" }}>
          <input
            className={errors.email?.message ? styles.error : ""}
            {...register("email", {
              required: "이메일을 입력해 주세요",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "올바른 이메일 주소가 아닙니다.",
              },
            })}
            type="email"
            placeholder="이메일을 입력해 주세요."
          />
        </div>
        <p className={styles.errorText}>{errors.email?.message}</p>
      </div>

      {/* 비밀번호 */}
      <div className={styles.commonInput}>
        <label>비밀번호</label>
        <div style={{ position: "relative" }}>
          <input
            className={errors.password?.message ? styles.error : ""}
            {...register("password", {
              required: "비밀번호를 입력해 주세요",
              minLength: {
                value: 8,
                message: "비밀번호를 확인해 주세요.",
              },
            })}
            type={buttonToggle ? "password" : "text"}
            placeholder="비밀번호를 입력해 주세요."
          />
          <ButtonToggle
            buttonToggle={buttonToggle}
            setButtonToggle={setButtonToggle}
          />
        </div>
        <p className={styles.errorText}>{errors.password?.message}</p>
      </div>
      <input className={styles.submitButton} type="submit" value="로그인" />
    </form>
  );
}
