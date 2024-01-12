import LoginForm from "../../Components/LoginForm/LoginForm";
import ProfilPage from "../../Components/ProfilPage/ProfilPage";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./style.scss";

export default function Login() {
  const isConnected = localStorage.getItem("token") !== null;

  return (
    <div className="login-register-form">
      {isConnected ? (
        <ProfilPage />
      ) : (
        <div>
          <h1 className="title-login">Identifiez vous ou créer votre compte</h1>
          <section className="form">
            <LoginForm />
            <div className="partition"></div>
            <RegisterForm />
          </section>
        </div>
      )}
    </div>
  );
}
