import { Link } from "react-router-dom";
import "./style.scss";

import { Sum } from "../../Pages/Cart/Cart";

export default function MySum({ sum }: Sum) {
  const totalToPay = sum;

  return (
    <section className="mySum">
      <article className="totalTtc">
        <h4>Total produit TTC:</h4>
        <h4>{sum} €</h4>
      </article>
      <div className="sumPartition"></div>
      <article className="sum">
        <h4>Total</h4>
        <h4>{totalToPay} €</h4>
      </article>
      <article className="actionButton">
        <Link to="/" className="mySumActionButton button-more-info">
          Continuer mes achats
        </Link>
        <Link
          to="/cartStepTwo"
          className="mySumActionButton button-more-info"
          type="button">
          Commander
        </Link>
      </article>
    </section>
  );
}
