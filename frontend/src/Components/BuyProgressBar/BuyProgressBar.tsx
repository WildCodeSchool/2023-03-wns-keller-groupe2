import "./style.scss";

export default function BuyProgressBar() {
  return (
    <section>
      <ul className="progressBar">
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          1-Panier
        </li>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          2-Connexion
        </li>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          3-Adresse
        </li>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          4-Reception
        </li>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          5-Paiement
        </li>
      </ul>
    </section>
  );
}
