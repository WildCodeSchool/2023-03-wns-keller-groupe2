import { gql, useQuery, useMutation } from "@apollo/client";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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

const DELETE_SHOP = gql`
  mutation DeleteShop($deleteShopId: Float!) {
    deleteShop(id: $deleteShopId)
  }
`;

export default function ShopList() {
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);
  const [deleteShop] = useMutation(DELETE_SHOP);
  const handleClickDelete = (id: Number) => {
    const deleteShopId = id;
    deleteShop({ variables: { deleteShopId } });
  };
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
                  <Link to={`/admin/shop/${shop.id}`}>
                    <AiOutlineEdit />
                  </Link>
                  <button onClick={() => handleClickDelete(shop.id)}>
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
