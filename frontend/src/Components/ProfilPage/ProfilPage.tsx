import { useContext } from "react";
import { UserContext } from "../../services/context/userContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { gql } from "@apollo/client";
import "./profilPage.scss";

const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      phonenum
      password
      lastName
      gender
      firstName
      email
    }
  }
`;

export default function ProfilPage() {
  //get user informations
  const userContext = useContext(UserContext);
  console.log(userContext);

  const navigate = useNavigate();

  if (!userContext) {
    return null;
  }
  const { user } = userContext;

  //fonction of deconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //fonction of modify informations of user
  const handleModify = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Coming soon",
      text: "Cette fonctionnalité sera bientôt disponible",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="style-info-user-container">
      <h1 className="title_info-user">Profil</h1>
      <ul>
        <li className="info-user">Fistname: {user.firstName}</li>
        <li className="info-user">Lastname: {user.lastName}</li>
        <li className="info-user">Email: {user.email}</li>
        <li className="info-user">Phone number: {user.phonenum}</li>
        <li className="info-user">Email: {user.email}</li>
        <div className="button-container">
          <button className="button-first" onClick={handleLogout}>
            Deconnexion
          </button>
          <button className="button-second" onClick={handleModify}>
            Modifier
          </button>
        </div>
      </ul>
    </div>
  );
}
