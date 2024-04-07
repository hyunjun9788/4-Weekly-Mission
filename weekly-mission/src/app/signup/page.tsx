import { Title } from "../../components/common/Title";
import Form from "../../components/common/Form";
import styles from "./signup.module.css";
export default function SignupPage() {
  return (
    <div className={styles.container}>
      <Title text="이미 회원이신가요?" btn="로그인 하기" />
      <Form />
    </div>
  );
}
