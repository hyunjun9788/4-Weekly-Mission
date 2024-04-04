import { useForm } from "react-hook-form";

import { Title } from "../../components/SigninPage/Title";
import Form from "../../components/SigninPage/Form";
import styles from "./signup.module.css";
export default function SignupPage() {
  return (
    <div className={styles.container}>
      <Title />
      <Form />
    </div>
  );
}
