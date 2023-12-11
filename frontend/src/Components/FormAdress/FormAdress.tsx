import { gql, useQuery } from "@apollo/client";
import { OrderContext } from "../../services/context/orderContext";
import { useContext } from "react";
import "./FormAdress.scss";
import { useNavigate } from "react-router-dom";

interface Shop {
  id: number;
  name: string;
  location: string;
  phonenum: number;
  email: string;
}

const GET_ALL_SHOP = gql`
  query GetAllShop {
    getAllShop {
      id
      name
      location
      phonenum
      email
    }
  }
`;

export default function FormAdress() {
  const orderContext = useContext(OrderContext);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_SHOP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = (event: any) => {
    orderContext?.setOrder({
      ...orderContext.order,
      [event.target.name]: event.target.value,
    });
    console.log("hChange order", orderContext?.order);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/cart/payment");
  };

  console.log(orderContext?.order);

  return (
    <form className="style-form" onSubmit={handleSubmit}>
      <label htmlFor="dateOfStart" className="adress-form-label">
        Date de départ
        <input
          type="date"
          name="dateOfStart"
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label htmlFor="locationOfStart" className="adress-form-label">
        Magasin de récupération
        <select
          name="locationOfStart"
          onChange={handleChange}
          className="form-input"
        >
          <option value="">--Choisissez le magasin</option>
          {data.getAllShop.map((shop: Shop) => {
            return <option value={shop.location}>{shop.name}</option>;
          })}
        </select>
      </label>
      <label htmlFor="dateOfEnd" className="adress-form-label">
        Date de fin
        <input
          type="date"
          name="dateOfEnd"
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label htmlFor="locationOfEnd" className="adress-form-label">
        Magasin de retour
        <select
          name="locationOfEnd"
          onChange={handleChange}
          className="form-input"
        >
          <option value="">--Choisissez le magasin</option>
          {data.getAllShop.map((shop: Shop) => {
            return <option value={shop.location}>{shop.name}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Etape suivante" className="form-button" />
    </form>
  );
}
