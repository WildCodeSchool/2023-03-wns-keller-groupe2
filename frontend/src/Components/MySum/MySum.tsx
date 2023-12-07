import { Link } from "react-router-dom";
import "./style.scss";

import { Sum } from "../../Pages/Cart/Cart";

export default function MySum({ sum }: Sum) {
  const totalToPay = sum + 200;

  return (
    <section className="mySum">
      <article className="totalTtc">
        <h4>Total produit TTC:</h4>
        <h4>{sum} €</h4>
      </article>
      <div className="sumPartition"></div>
      <article className="totalShippingCosts">
        <h4>Total frais de port</h4>
        <h4>200 €</h4>
      </article>
      <div className="sumPartition"></div>
      <article className="sum">
        <h4>Total</h4>
        <h4>{totalToPay} €</h4>
      </article>
      <article className="actionButton">
        <Link to="/" className="mySumActionButton">
          Continuer mes achats
        </Link>
        <Link to="/cartStepTwo" className="mySumActionButton" type="button">
          Commander
        </Link>
      </article>
    </section>
  );
}
