import axios from "axios";
import {
  BASE_CHECK_EMAIL_URL,
  BASE_SIGNUP_URL,
} from "../../constants/url.constant";

export const checkEmailDuplicate = async (email: string) => {
  try {
    const response = await axios.post(BASE_CHECK_EMAIL_URL, { email });
    return response.status === 200;
  } catch (error: any) {
    console.error("Error checking email:", error);
    return false;
  }
};

export const onSignupSubmit = async (data: any) => {
  const { email, password, passwordConfirm } = data;
  try {
    const response = await axios.post(BASE_SIGNUP_URL, {
      email,
      password,
      passwordConfirm,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    throw new Error("회원가입 실패");
  }
};
