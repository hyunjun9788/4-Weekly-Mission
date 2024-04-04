"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
const Form = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <label htmlFor="email">이메일</label>
        <Input id="email" type="email" placeholder="이메일을 입력해주세요." />
        <label htmlFor="password">비밀번호</label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <button className={styles.button} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Form;
