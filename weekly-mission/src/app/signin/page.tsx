import { useForm } from "react-hook-form";

import { Title } from "../../components/SigninPage/Title";
import Form from "../../components/SigninPage/Form";
import styles from "./signin.module.css";
export default function SigninPage() {
  return (
    <div className={styles.container}>
      <Title />
      <Form />
    </div>
  );
}
