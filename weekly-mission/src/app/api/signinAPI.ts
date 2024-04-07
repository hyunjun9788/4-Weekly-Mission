import axios from "axios";
import { BASE_SIGNIN_URL } from "../../constants/url.constant";

interface dataType {
  email: string;
  password: string;
}
export const onSigninSubmit = async (data: dataType) => {
  const { email, password } = data;
  try {
    const response = await axios.post(BASE_SIGNIN_URL, { email, password });
    if (response.data.data.accessToken) {
      localStorage.setItem("accessToken", response.data.data.accessToken);
    }
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw new Error("로그인 실패");
  }
};
