import Image from "../../assets/bicycle.png";
import { useContext } from "react";
import { UserContext } from "../../services/context/userContext";
import { BillingContext } from "../../services/context/billlingContext";
import { OrderContext } from "../../services/context/orderContext";
import "./buyResume.scss";

export default function BuyResume() {
  const userContext = useContext(UserContext);
  const billingContext = useContext(BillingContext);
  const orderContext = useContext(OrderContext);

  if (!userContext || !billingContext || !orderContext) {
    return null;
  }

  const { user } = userContext;
  const { billing } = billingContext;
  const { order } = orderContext;

  return (
    <article className="buy-resume">
      <h2>Vos réservations</h2>

      <div className="bike-picture-list">
        <img src={Image} alt="" className="bike-picture" />
      </div>

      <h2>Votre adresse de facturation</h2>
      <section className="section-container">
        <p className="tenant-name">
          {user.lastName} {user.firstName}
        </p>
        <p className="tenant-adress">{billing.adress}</p>
        <p className="tenant-adress">{billing.additionnalAdress}</p>
        <p className="tenant-adress">{billing.zipCode}</p>
        <p className="tenant-adress">{billing.city}</p>
      </section>

      <section className="shop-date-container-start">
        <h2>Retrait</h2>
        <div className="shop-start">
          <p className="date">{order.dateOfStart}</p>
          <p className="shop-name">{order.locationOfStart}</p>
        </div>
      </section>

      <section className="shop-date-container-end">
        <h2>Retour</h2>
        <div className="shop-end">
          <p className="date">{order.dateOfEnd}</p>
          <p className="shop-name">{order.locationOfEnd}</p>
        </div>
      </section>
    </article>
  );
}
