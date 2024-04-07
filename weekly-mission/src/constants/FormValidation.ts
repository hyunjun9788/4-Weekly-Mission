import * as yup from "yup";
import { checkEmailDuplicate } from "../app/api/signupAPI";

export const FORM_SCHEMA = yup.object({
  email: yup
    .string()
    .required("이메일은 필수 입력입니다.")
    .email("올바른 이메일 주소가 아닙니다.")
    .test(
      "check-email-exists",
      "이미 존재하는 이메일입니다.",
      async (value) => {
        const isDuplicateEmail = await checkEmailDuplicate(value);
        return isDuplicateEmail;
      }
    ),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
});

export default FORM_SCHEMA;
