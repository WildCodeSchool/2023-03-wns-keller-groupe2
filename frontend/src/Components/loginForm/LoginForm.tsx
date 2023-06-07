import logo from "../../public/assets/userIcon.png";
import "./style.scss";

export default function LoginForm() {
  return (
    <div className="loginForm">
      <div className="logHeader">
        {/* <img src={logo} alt="users_icon" /> */}
        <h1>Déjà client</h1>
      </div>
      <form className="logForm" action="">
        <label className="labelForm" htmlFor="mail">
          Email:
          <input type="email" name="mail" id="mail" />
        </label>
        <label className="labelForm" htmlFor="password">
          Mots de passe:
          <input type="password" name="password" id="password" />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
