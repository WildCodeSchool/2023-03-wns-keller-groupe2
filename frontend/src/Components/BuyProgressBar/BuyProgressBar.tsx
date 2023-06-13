import "./style.scss";

export default function BuyProgressBar() {
  return (
    <section>
      <ul className="progressBar">
        <div className="progressLineExtremity"></div>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          1-Panier
        </li>
        <div className="progressLine"></div>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          2-Connexion
        </li>
        <div className="progressLine"></div>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          3-Adresse
        </li>
        <div className="progressLine"></div>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          4-Reception
        </li>
        <div className="progressLine"></div>
        <li className="step">
          <div className="borderStepPoint">
            <div className="stepPoint"></div>
          </div>
          5-Paiement
        </li>
        <div className="progressLineExtremity"></div>
      </ul>
    </section>
  );
}
