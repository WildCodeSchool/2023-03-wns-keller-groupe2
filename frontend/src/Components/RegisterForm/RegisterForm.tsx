import logo from "../../assets/userIcon.png";
import "./style.scss";

export default function RegisterForm() {
  return (
    <div className="registerForm">
      <div className="registerHeader">
        <img className="usersLogo" src={logo} alt="users_icon" />
        <h1>Nouveau client</h1>
      </div>
      <form action="">
        <label className="labelForm" htmlFor="mail">
          Email:
          <input
            className="inputRegisterForm"
            type="mail"
            name="mail"
            id="mail"
          />
        </label>
        <label className="labelForm" htmlFor="lastName">
          Nom:
          <input
            className="inputRegisterForm"
            type="text"
            name="lastName"
            id="lastName"
          />
        </label>
        <label className="labelForm" htmlFor="firstName">
          Prenom:
          <input
            className="inputRegisterForm"
            type="text"
            name="firstName"
            id="firstName"
          />
        </label>
        <label className="labelForm" htmlFor="password">
          Mot de passe:
          <input
            className="inputRegisterForm"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <label className="labelForm" htmlFor="confPassword">
          Confirmer mot de passe:
          <input
            className="inputRegisterForm"
            type="password"
            name="confPassword"
            id="confPassword"
          />
        </label>
        <button className="formSubmitButton" type="submit">
          Bienvenue chez nous!
        </button>
      </form>
    </div>
  );
}
