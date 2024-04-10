import styles from "@/styles/login/input.module.css";
import { useForm } from "react-hook-form";
import { EmailCheckApi, SignUpType, signupData } from "@/apis/apiLogin";
import ButtonToggle from "./buttonToggle";
import { useState } from "react";
export default function SignUpForm() {
  // password input 버튼 변수
  const [passwordButton, setPasswordButton] = useState(true);
  const [pwfirmButton, setPwfirmButton] = useState(true);

  // useForm 선언
  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
    watch,
  } = useForm<SignUpType>({
    shouldFocusError: false,
    mode: "onBlur",
  });

  // 회원가입 스크립트
  async function onSignup(signUpData: SignUpType) {
    try {
      const result = await signupData(signUpData);
      localStorage.setItem("accessToken", result.data.accessToken);
    } catch (error) {
      setError("email", { message: "이메일을 확인해 주세요." });
      setError("password", { message: "비밀번호를 확인해 주세요." });
      setError("pwfirm", { message: "비밀번호를 확인해 주세요." });
    }
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSignup)}>
      {/* 이메일 */}
      <div className={styles.commonInput}>
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
              validate: async (EmailData: string) => {
                try {
                  await EmailCheckApi(EmailData);
                } catch (error) {
                  return "이미 사용 중인 이메일입니다.";
                }
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
              pattern: {
                value: /(?=.*[a-zA-Z])(?=.*\d).{8,}/,
                message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
              },
            })}
            type={passwordButton ? "password" : "text"}
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          />
          <ButtonToggle
            buttonToggle={passwordButton}
            setButtonToggle={setPasswordButton}
          />
        </div>
        <p className={styles.errorText}>{errors.password?.message}</p>
      </div>

      {/* 비밀번호 확인 */}
      <div className={styles.commonInput}>
        <label>비밀번호 확인</label>
        <div style={{ position: "relative" }}>
          <input
            className={errors.pwfirm?.message ? styles.error : ""}
            {...register("pwfirm", {
              required: "비밀번호를 입력해 주세요",
              validate: (value) =>
                value === watch("password") || "비밀번호가 일치하지 않습니다.",
            })}
            type={pwfirmButton ? "password" : "text"}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          />
          <ButtonToggle
            buttonToggle={pwfirmButton}
            setButtonToggle={setPwfirmButton}
          />
        </div>
        <p className={styles.errorText}>{errors.pwfirm?.message}</p>
      </div>
      <input className={styles.submitButton} type="submit" value="회원가입" />
    </form>
  );
}
