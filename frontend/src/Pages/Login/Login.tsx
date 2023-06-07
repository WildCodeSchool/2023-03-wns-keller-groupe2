import LoginForm from "../../Components/loginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

export default function Login() {
  return (
    <>
      <h1>Identifiez vous ou créer votre compte</h1>
      <section className="form">
        <LoginForm />
        <RegisterForm />
      </section>
    </>
  );
}
