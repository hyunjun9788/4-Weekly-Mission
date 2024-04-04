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

const Input = ({ id, type, placeholder }: InputType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };
  return (
    <div className={styles.container}>
      {type === "email" ? (
        <input
          className={`${styles.input} ${styles.email}`}
          {...register("email", { required: true })}
        />
      ) : (
        <input
          type={isEyeOn === true ? "password" : "text"}
          className={`${styles.input} ${styles.password}`}
          {...register("password", { required: true })}
        />
      )}
      {errors.email && (
        <p className={styles.errorMessage}>이메일을 입력해 주세요.</p>
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
        <p className={styles.errorMessage}>비밀번호를 입력해 주세요.</p>
      )}
    </div>
  );
};

export default Input;
