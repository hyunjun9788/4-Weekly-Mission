import styles from "./Input.module.css";
import eyeOn from "../../assets/eye-on.png";
import eyeOff from "../../assets/eye-off.png";

import { useState } from "react";
const Input = ({ isEmailOrPw }: any) => {
  const [isEyeOn, setIsEyeOn] = useState(true);

  const onChangeEye = () => {
    setIsEyeOn(!isEyeOn);
  };
  return (
    <div className={styles.container}>
      {isEmailOrPw === "email" ? (
        <input className={`${styles.input} ${styles.email}`} />
      ) : (
        <input
          type={isEyeOn === true ? "password" : "text"}
          className={`${styles.input} ${styles.password}`}
        />
      )}

      {isEmailOrPw === "password" && (
        <>
          {isEyeOn === true ? (
            <img
              className={styles.eye}
              src={eyeOn}
              onClick={onChangeEye}
              alt="비밀번호 보기"
            />
          ) : (
            <img
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
