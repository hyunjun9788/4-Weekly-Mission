import Image from "next/image";
import logo from "../../../public/images/Linkbrary.png";
import Link from "next/link";
import styles from "./Title.module.css";
export const Title = () => {
  return (
    <>
      <Image width={210} height={38} src={logo} alt="linkbrary" />
      <div>
        <span>회원이 아니신가요?</span>
        <Link className={styles.signupBtn} href="">
          회원 가입하기
        </Link>
      </div>
    </>
  );
};
