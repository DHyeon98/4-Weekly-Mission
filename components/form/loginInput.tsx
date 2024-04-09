import styles from "@/styles/login/input.module.css";
import { useEffect, useState } from "react";
import { RegisterOptions, useForm } from "react-hook-form";
import ButtonToggle from "./buttonToggle";
interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation?: RegisterOptions;
  handleBlur?: (data: string) => Promise<void>;
}
export default function LoginInput({
  name,
  label,
  type,
  placeholder,
  validation,
}: InputFieldProps) {
  const [buttonToggle, setButtonToggle] = useState(true);

  const {
    register,
    formState: { errors },
    watch,
    getValues,
  } = useForm({ mode: "onBlur" });

  return (
    <>
      <div className={styles.commonInput}>
        <label>{label}</label>
        <div style={{ position: "relative" }}>
          <input
            className={errors[name]?.message ? styles.error : ""}
            {...register(name, validation)}
            type={buttonToggle ? type : "text"}
            placeholder={placeholder}
          />
          {type === "password" ? (
            <ButtonToggle
              buttonToggle={buttonToggle}
              setButtonToggle={setButtonToggle}
            />
          ) : null}
        </div>
        <p className={styles.errorText}>{errors[name]?.message?.toString()}</p>
      </div>
    </>
  );
}
