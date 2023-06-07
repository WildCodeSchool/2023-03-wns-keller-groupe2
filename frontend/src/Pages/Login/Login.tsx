import LoginForm from "../../Components/loginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./style.scss";

export default function Login() {
  return (
    <div className="loginRegisterForm">
      <h1>Identifiez vous ou créer votre compte</h1>
      <section className="form">
        <LoginForm />
        <RegisterForm />
      </section>
    </div>
  );
}
