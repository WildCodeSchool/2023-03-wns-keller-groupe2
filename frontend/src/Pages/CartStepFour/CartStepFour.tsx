import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import FormAdress from "../../Components/FormAdress/FormAdress";
import "./CartStepFour.scss";

export default function CartStepFour() {
  return (
    <section className="cart-step-four">
      <BuyProgressBar />
      <h2>Lieu de récupération</h2>
      <FormAdress />
    </section>
  );
}
