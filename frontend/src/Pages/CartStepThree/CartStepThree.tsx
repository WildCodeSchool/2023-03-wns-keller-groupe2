import AdressBillingForm from "../../Components/AdressBillingForm/AdressBillingForm";
import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import "./CartStepThree.scss";

export default function CartStepThree() {
  return (
    <section className="cart-step-three">
      <BuyProgressBar />
      <h2>Adresse de facturation</h2>
      <AdressBillingForm />
    </section>
  );
}
