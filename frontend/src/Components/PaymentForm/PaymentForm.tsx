import "./paymentForm.scss";

export default function PaymentForm() {
  return (
    <form className="style-form">
      <h2>Coordonées de la carte</h2>
      <label htmlFor="cardNum" className="payment-label">
        Numéro de la carte
        <input name="cardNum" type="text" className="form-input" />
      </label>
      <label htmlFor="cardExpiry" className="payment-label">
        Date d'expiration
        <input name="cardExpiry" type="text" className="form-input" />
      </label>
      <label htmlFor="CardCVV" className="payment-label">
        CVV
        <input name="cardCVV" type="text" className="form-input" />
      </label>
      <h2>Tituliare de la carte</h2>
      <label htmlFor="cardName" className="payment-label">
        Titulaire de la carte
        <input name="cardName" type="text" className="form-input" />
      </label>
      <button type="submit" className="form-button">
        Payer
      </button>
    </form>
  );
}
