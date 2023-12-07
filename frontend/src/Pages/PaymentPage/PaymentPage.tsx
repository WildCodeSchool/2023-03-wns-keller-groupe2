import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import BuyResume from "../../Components/BuyResume/BuyResume";
import PaymentForm from "../../Components/PaymentForm/PaymentForm";
import "./paymentPage.scss";

export default function PaymentPage() {
  return (
    <>
      <BuyProgressBar />
      <section className="payment-resume">
        <BuyResume />
        <PaymentForm />
      </section>
    </>
  );
}
