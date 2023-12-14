import Image from "../../assets/bicycle.png";
import { useContext } from "react";
import { UserContext } from "../../services/context/userContext";
import { BillingContext } from "../../services/context/billlingContext";
import { RentContext } from "../../services/context/rentContext";
import { OrderContext } from "../../services/context/orderContext";
import "./buyResume.scss";

export default function BuyResume() {
  const userContext = useContext(UserContext);
  const billingContext = useContext(BillingContext);
  const rentContext = useContext(RentContext);
  const orderContext = useContext(OrderContext);

  if (!userContext || !billingContext || !rentContext || !orderContext) {
    return null;
  }

  const { user, setUser } = userContext;
  const { billing, setBilling } = billingContext;
  const { rent, setRent } = rentContext;
  const { order, setOrder } = orderContext;

  return (
    <article className="buy-resume">
      <h2>Vos réservations</h2>
      <div className="bike-picture-list">
        <img src={Image} alt="" className="bike-picture" />
      </div>
      <h2>Votre adresse de facturation</h2>
      <p className="tenant-name">
        {user.lastName} {user.firstName}
      </p>
      <p className="tenant-adress">{billing.adress}</p>
      <p className="tenant-adress">{billing.additionnalAdress}</p>
      <p className="tenant-adress">{billing.city}</p>
      <h2>Lieu de retrait</h2>
      <p className="shop-name">{order.locationOfStart}</p>
      <h2>Lieu de retour</h2>
      <p className="shop-name">{order.locationOfEnd}</p>
      <h2>Date de retrait</h2>
      <p className="date">{order.dateOfStart}</p>
      <h2>Date de retour</h2>
      <p className="date">{order.dateOfEnd}</p>
    </article>
  );
}
