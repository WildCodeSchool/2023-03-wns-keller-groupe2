import { Link } from "react-router-dom";
import "./AlreadyConnect.scss";

export default function AlreadyConnect() {
  return (
    <section className="already-connect">
      <h2>Vous êtes déjà connecté!</h2>
      <Link to="/cartStepThree"> Passer a l'étape suivante</Link>
    </section>
  );
}
