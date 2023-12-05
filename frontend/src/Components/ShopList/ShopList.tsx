import { gql, useQuery } from "@apollo/client";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";

interface Shop {
  id: number;
  name: string;
  location: string;
  phonenum: number;
  email: string;
}

const GET_ALL_SHOPS = gql`
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

export default function ShopList() {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <table className="shop-list-table">
        <thead>
          <tr>
            <th colSpan={6}>Liste des utilisateurs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-column">id</td>
            <td className="table-column">Nom</td>
            <td className="table-column">Localisation</td>
            <td className="table-column">email</td>
            <td className="table-column">Numéros de télephone</td>
            <td className="table-column">Actions</td>
          </tr>
          {data.getAllShop.map((shop: Shop) => {
            return (
              <tr key={shop.id}>
                <td className="table-column">{shop.id}</td>
                <td className="table-column">{shop.name}</td>
                <td className="table-column">{shop.location}</td>
                <td className="table-column">{shop.email}</td>
                <td className="table-column">{shop.phonenum}</td>
                <td className="table-column action">
                  <button>
                    <AiOutlineEdit />
                  </button>
                  <button>
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
