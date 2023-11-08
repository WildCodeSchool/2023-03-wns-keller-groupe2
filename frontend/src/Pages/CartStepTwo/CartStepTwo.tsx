import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./cartStepTwo.scss";

export default function CartStepTwo() {
  return (
    <section className="connexion">
      <header>
        <h2>Connexion</h2>
        <p>Veuillez vous connecter a votre compte</p>
      </header>
      <LoginForm />
      <Link to="/login">Se créer un compte</Link>
    </section>
  );
}
