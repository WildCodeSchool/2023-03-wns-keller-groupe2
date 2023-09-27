import { gql, useQuery } from "@apollo/client";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";
import "./userlist.scss";

interface User {
  id: number;
  admin: boolean;
  phonenum: number;
  gender: string;
  email: string;
  lastName: string;
  firstName: string;
}

const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      admin
      phonenum
      gender
      email
      lastName
      firstName
    }
  }
`;
export default function UserList() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <table className="user-list-table">
      <thead>
        <tr>
          <th colSpan={8}>Liste des utilisateurs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="table-column">id</td>
          <td className="table-column">Nom</td>
          <td className="table-column">Prénom</td>
          <td className="table-column">email</td>
          <td className="table-column">Numéros de télephone</td>
          <td className="table-column">genre</td>
          <td className="table-column">admin</td>
          <td className="table-column">action</td>
        </tr>
        {data.getAllUsers.map((user: User) => {
          return (
            <tr key={user.id}>
              <td className="table-column">{user.id}</td>
              <td className="table-column">{user.lastName}</td>
              <td className="table-column">{user.firstName}</td>
              <td className="table-column">{user.email}</td>
              <td className="table-column">{user.phonenum}</td>
              <td className="table-column">{user.gender}</td>
              {user.admin ? (
                <td className="table-column">
                  <FcCheckmark />
                </td>
              ) : (
                <td className="table-column">
                  <FcCancel />
                </td>
              )}
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
  );
}
