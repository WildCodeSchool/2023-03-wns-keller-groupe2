import { gql, useQuery } from "@apollo/client";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import "./bikelist.scss";

interface Bike {
  id: number;
  dateMaintenance: String;
  description: String;
  disponibility: Boolean;
  gender: string;
  name: string;
  price: number;
}

const GET_ALL_BIKES = gql`
  query GetAllBike {
    getAllBike {
      dateMaintenance
      disponibility
      description
      gender
      id
      name
      price
    }
  }
`;
export default function BikeList() {
  const { loading, error, data } = useQuery(GET_ALL_BIKES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <table className="bike-list-table">
      <thead>
        <tr>
          <th colSpan={7}>Liste des utilisateurs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table-column">id</td>
          <td className="table-column">Nom</td>
          <td className="table-column">genre</td>
          <td className="table-column">Description</td>
          <td className="table-column">Prix</td>
          <td className="table-column">Date de Maintenance</td>
          <td className="table-column">Disponibilité</td>
        </tr>
        <tr>
          <td className="table-column">test</td>
          <td className="table-column">test</td>
          <td className="table-column">test</td>
          <td className="table-column">test</td>
          <td className="table-column">test</td>
          <td className="table-column">test</td>
          <td className="table-column">
            <FcCheckmark />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
