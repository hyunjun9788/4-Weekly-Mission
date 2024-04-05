"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import SnsLogin from "./SnsLogin";
import Button from "../common/Button";
import axios from "axios";

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
    const { email, password } = data;
    try {
      const response = await axios.post(
        "https://bootcamp-api.codeit.kr/api/sign-in",
        { email, password }
      );
      if (response.data.data.accessToken) {
        localStorage.setItem("accessToken", response.data.data.accessToken);
      }
      console.log(response);
      if (response.status === 200) {
        router.push("/folder");
      }
    } catch (error) {
      throw new Error("로그인 실패");
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
        <Button>로그인</Button>
        <SnsLogin />
      </form>
    </div>
  );
};

export default Form;
