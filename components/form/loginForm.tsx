import { useState } from "react";
import styles from "@/styles/login/input.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { LoginData } from "@/apis/apiLogin";
type LoginType = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginType>({ shouldFocusError: false });

  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const [errorPasswordCheck, setErrorPasswordCheck] = useState("");
  const [buttonToggle, setButtonToggle] = useState(true);
  const handleInputBlur = (type: string) => {
    if (type === "email") {
      if (!emailRegex.test(watch("email"))) {
        setErrorEmailCheck("올바른 이메일 주소가 아닙니다.");
      } else if (!watch("email")) {
        setErrorEmailCheck("이메일을 입력해 주세요.");
      } else {
        setErrorEmailCheck("");
      }
    } else {
      if (!watch("password")) {
        setErrorPasswordCheck("비밀번호를 입력해 주세요.");
      } else {
        setErrorPasswordCheck("");
      }
    }
  };
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const loginClass = errorEmailCheck || errors.email?.message;
  const passwordClass = errorPasswordCheck || errors.password?.message;
  const handleButtonToggle = () => {
    setButtonToggle(!buttonToggle);
  };

  async function onLogin(data: LoginType) {
    try {
      const result = await LoginData(data);
      localStorage.setItem("accessToken", result.data.accessToken);
    } catch (error) {
      setErrorEmailCheck("이메일을 확인해 주세요.");
      setErrorPasswordCheck("비밀번호를 확인해 주세요.");
    }
  }
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onLogin)}>
        {/* 이메일 */}
        <div className={styles.commonInput}>
          <label>이메일</label>
          <input
            className={loginClass ? styles.error : ""}
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
            onBlur={() => handleInputBlur("email")}
          />
        </div>
        <p className={styles.errorText}>
          {errorEmailCheck ? errorEmailCheck : errors.email?.message}
        </p>

        {/* 비밀번호 */}
        <div className={styles.commonInput}>
          <label>비밀번호</label>
          <input
            className={passwordClass ? styles.error : ""}
            {...register("password", {
              required: "비밀번호를 확인해 주세요.",
              minLength: {
                value: 8,
                message: "비밀번호를 확인해 주세요.",
              },
            })}
            type={buttonToggle ? "password" : "text"}
            placeholder="비밀번호를 입력해 주세요."
            onBlur={() => handleInputBlur("password")}
          />
          <button type="button" onClick={handleButtonToggle}>
            {buttonToggle ? (
              <Image fill src={"/images/eyeOff.png"} alt="비밀번호 가리기" />
            ) : (
              <Image fill src={"/images/eyeOn.png"} alt="비밀번호 보이기" />
            )}
          </button>
        </div>
        <p className={styles.errorText}>
          {errorPasswordCheck ? errorPasswordCheck : errors.password?.message}
        </p>
        <input className={styles.submitButton} type="submit" value="로그인" />
      </form>
    </div>
  );
}
