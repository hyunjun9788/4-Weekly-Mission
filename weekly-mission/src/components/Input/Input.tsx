import styles from "./Input.module.css";
import eyeOn from "../../../public/images/eye-on.png";
import eyeOff from "../../../public/images/eye-off.png";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
{
  /* <label htmlFor="email">이메일</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
        /> */
}

interface InputType {
  id: string;
  type: string;
  placeholder: string;
}
const Input = ({ id, type, placeholder }: InputType) => {
  const { register, handleSubmit } = useForm();
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };
  return (
    <div className={styles.container}>
      {type === "email" ? (
        <input
          className={`${styles.input} ${styles.email}`}
          {...register(type)}
        />
      ) : (
        <input
          type={isEyeOn === true ? "password" : "text"}
          className={`${styles.input} ${styles.password}`}
        />
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
    </div>
  );
};

export default Input;
