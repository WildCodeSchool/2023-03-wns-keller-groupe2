import logo from "../../assets/userIcon.png";
import "./style.scss";

export default function LoginForm() {
  return (
    <div className="loginForm">
      <div className="logHeader">
        <img className="usersLogo" src={logo} alt="users_icon" />
        <h1>Déjà client</h1>
      </div>
      <form className="logForm" action="">
        <label className="labelForm" htmlFor="mail">
          Email:
          <input
            className="inputLoginForm"
            type="email"
            name="mail"
            id="mail"
          />
        </label>
        <label className="labelForm" htmlFor="password">
          Mot de passe:
          <input
            className="inputLoginForm"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button className="formSubmitButton" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}
