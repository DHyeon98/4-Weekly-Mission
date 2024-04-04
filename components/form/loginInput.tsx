import { useRef, useState } from "react";
import styles from "@/styles/components/input.module.css";
import Image from "next/image";

export default function LoginInput() {
  const [errorCheck, setErrorCheck] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputBlur = () => {
    if (inputRef.current) {
      // 에러케이스
      const errorCase = inputRef.current.value.length < 8;
      setErrorCheck(errorCase);
    }
  };
  const handleButtonToggle = () => {
    setButtonToggle(!buttonToggle);
  };
  return (
    <>
      <div className={`${styles.commonInput} ${styles.passwordInput}`}>
        <input
          className={errorCheck ? styles.error : ""}
          ref={inputRef}
          type={buttonToggle ? "password" : "text"}
          placeholder="내용 입력"
          onBlur={handleInputBlur}
        />
        <button type="button" onClick={handleButtonToggle}>
          {buttonToggle ? (
            <Image fill src={"/images/eyeOn.png"} alt="비밀번호 가리기" />
          ) : (
            <Image fill src={"/images/eyeOff.png"} alt="비밀번호 보이기" />
          )}
        </button>
      </div>
      {errorCheck ? (
        <p className={styles.errorText}>내용을 다시 작성해주세요.</p>
      ) : null}
    </>
  );
}
