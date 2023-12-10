import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdressBillingForm.scss";

export default function AdressBillingForm() {
  const [adressBilling, setAdressBilling] = useState({
    adress: "",
    additionalAddress: "",
    zipCode: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setAdressBilling({ ...adressBilling, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(adressBilling);
    navigate("/cartStepFour");
  };

  return (
    <form className="style-form">
      <label htmlFor="adress" className="form-label">
        Adresse:
        <input
          name="adress"
          type="text"
          className="form-input"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="additionalAddress" className="form-label">
        Complément d'adresse:
        <input
          name="additionalAddress"
          type="text"
          className="form-input"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="zipCode" className="form-label">
        Code postal:
        <input
          name="zipCode"
          type="text"
          className="form-input"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="city" className="form-label">
        Ville:
        <input
          name="city"
          type="text"
          className="form-input"
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="form-button" onClick={handleSubmit}>
        Valider
      </button>
    </form>
  );
}
