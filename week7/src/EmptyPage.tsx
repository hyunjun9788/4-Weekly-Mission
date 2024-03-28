import Input from "./components/Input/Input.tsx";

function EmptyPage() {
  return (
    <>
      <h1>시작페이지</h1>
      <Input isEmailOrPw="email" />
      <Input isEmailOrPw="password" />
    </>
  );
}

export default EmptyPage;
