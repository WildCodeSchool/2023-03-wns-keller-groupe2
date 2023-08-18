import LoginForm from "../../Components/LoginForm/LoginForm";
import "./style.scss";

export default function Login() {
  return (
    <>
      <div className="login-register-form">
        <h1 className="title-login">Identifiez vous ou créer votre compte</h1>
        <section className="form">
          <LoginForm />
        </section>
      </div>
    </>
  );
}
