import { gql, useQuery } from "@apollo/client";
import "./FormAdress.scss";

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
  const { loading, error, data } = useQuery(GET_ALL_SHOP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data.getAllShop);
  return (
    <form className="form-adress">
      <label htmlFor="dateOfStart" className="adress-form-label">
        Date de départ
        <input type="date" name="dateOfStart" />
      </label>
      <label htmlFor="shopStart" className="adress-form-label">
        Magasin de récupération
        <select name="shopStart">
          <option value="">--Choisissez le magasin</option>
          {data.getAllShop.map((shop: Shop) => {
            return <option value={shop.location}>{shop.name}</option>;
          })}
        </select>
      </label>
      <label htmlFor="dateOfEnd" className="adress-form-label">
        Date de fin
        <input type="date" name="dateOfEnd" />
      </label>
      <label htmlFor="shopEnd" className="adress-form-label">
        Magasin de retour
        <select name="shopEnd">
          <option value="">--Choisissez le magasin</option>
          {data.getAllShop.map((shop: Shop) => {
            return <option value={shop.location}>{shop.name}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Valider" />
    </form>
  );
}
