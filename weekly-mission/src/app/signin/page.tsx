import { Title } from "../../components/common/Title";
import Form from "../../components/common/Form";
import styles from "./signin.module.css";
export default function SigninPage() {
  return (
    <div className={styles.container}>
      <Title text="회원이 아니신가요?" btn="회원 가입하기" />
      <Form />
    </div>
  );
}
