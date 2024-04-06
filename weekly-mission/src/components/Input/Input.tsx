import styles from "./Input.module.css";
import eyeOn from "../../../public/images/eye-on.png";
import eyeOff from "../../../public/images/eye-off.png";

import { useState } from "react";
import Image from "next/image";

interface InputType {
  errors: any;
  register: any;
  id: string;
  type: string;
  placeholder: string;
}

const Input = ({ id, type, placeholder, register, errors }: InputType) => {
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };

  return (
    <div className={styles.container}>
      {type === "email" && (
        <input
          className={`${styles.input} ${styles.email}`}
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "올바른 이메일 주소가 아닙니다.",
            },
          })}
          placeholder={placeholder}
        />
      )}

      {type === "password" && (
        <>
          <input
            type={isEyeOn ? "password" : "text"}
            className={`${styles.input} ${styles.password}`}
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
            })}
            placeholder={placeholder}
          />
          <Image
            width={25}
            className={styles.eye}
            src={isEyeOn ? eyeOn : eyeOff}
            onClick={onChangeEye}
            alt="비밀번호 보기"
          />
        </>
      )}

      {type === "passwordConfirm" && (
        <>
          <input
            type={isEyeOn ? "password" : "text"}
            className={`${styles.input} ${styles.password}`}
            {...register("passwordConfirm", {})}
            placeholder={placeholder}
          />
          <Image
            width={25}
            className={styles.eye}
            src={isEyeOn ? eyeOn : eyeOff}
            onClick={onChangeEye}
            alt="비밀번호 보기"
          />
        </>
      )}
      {errors && (
        <small className={styles.errorMessage} role="alert">
          {errors.message}
        </small>
      )}
    </div>
  );
};

export default Input;
