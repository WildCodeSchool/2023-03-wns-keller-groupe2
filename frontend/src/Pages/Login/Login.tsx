import LoginForm from "../../Components/loginForm/LoginForm";
import NavBar from "../../Components/NavBar/NavBar";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./style.scss";

export default function Login() {
  return (
    <>
    <NavBar /> 
    <div className="loginRegisterForm">
      <h1>Identifiez vous ou créer votre compte</h1>
      <section className="form">
        <LoginForm />
        <div className="partition"></div>
        <RegisterForm />
      </section>
    </div>
    </>
  );
}
