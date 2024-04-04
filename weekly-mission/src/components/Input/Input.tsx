import styles from "./Input.module.css";
import eyeOn from "../../../public/images/eye-on.png";
import eyeOff from "../../../public/images/eye-off.png";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface InputType {
  id: string;
  type: string;
  placeholder: string;
}
interface FormValue {
  email: string;
  password: string;
}
const Input = ({ id, type, placeholder }: InputType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onBlur" });
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };
  return (
    <div className={styles.container}>
      {type === "email" ? (
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
        />
      ) : (
        <input
          type={isEyeOn === true ? "password" : "text"}
          className={`${styles.input} ${styles.password}`}
          {...register("password", { required: "비밀번호는 필수 입력입니다." })}
        />
      )}

      {errors.email && (
        <small className={styles.errorMessage} role="alert">
          {errors.email.message}
        </small>
      )}
      {type === "password" && (
        <>
          {isEyeOn === true ? (
            <Image
              width={25}
              className={styles.eye}
              src={eyeOn}
              onClick={onChangeEye}
              alt="비밀번호 보기"
            />
          ) : (
            <Image
              width={25}
              className={styles.eye}
              onClick={onChangeEye}
              src={eyeOff}
              alt="비밀번호 가리기"
            />
          )}
        </>
      )}
      {errors.password && (
        <small className={styles.errorMessage} role="alert">
          {errors.password.message}
        </small>
      )}
    </div>
  );
};

export default Input;
