import { Link } from "react-router-dom";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { useContext } from "react";
import { UserContext } from "../../services/context/userContext";
import AlreadyConnect from "../../Components/AlreadyConnect/AlreadyConnect";
import "./cartStepTwo.scss";

export default function CartStepTwo() {
  const users = useContext(UserContext);
  return (
    <>
      {users?.user.id ? (
        <AlreadyConnect />
      ) : (
        <section className="connexion">
          <header>
            <p>Veuillez vous connecter a votre compte</p>
          </header>
          <LoginForm />
          <Link to="/login" className="button-more-info">
            Se créer un compte
          </Link>
        </section>
      )}
    </>
  );
}
