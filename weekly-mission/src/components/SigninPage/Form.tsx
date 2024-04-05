"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
interface FormValue {
  email: string;
  password: string;
}
const Form = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: "onBlur" });
  const onSubmit = async (data: any) => {
    console.log(data);

    try {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        router.push("/folder");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <Input
          register={register}
          errors={errors.email}
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요."
        />
        <label htmlFor="password">비밀번호</label>
        <Input
          register={register}
          errors={errors.password}
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
