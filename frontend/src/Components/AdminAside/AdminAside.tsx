import { Link } from "react-router-dom";
import Image from "../../assets/Logo.png";
import { Navigate } from "../../Pages/Admin/Admin";
import "./adminAside.scss";

interface AdminAsideProps {
  setNavigate: Navigate["setNavigate"];
}
export default function AdminAside({ setNavigate }: AdminAsideProps) {
  return (
    <aside>
      <Link to="/">
        <img className="logo" src={Image} alt="Logo of RentBike" />
      </Link>
      <ul>
        <li>Ventes</li>
        <li
          onClick={() => {
            setNavigate("users");
          }}
        >
          Utilisateurs
        </li>
        <li>Points de vente</li>
        <li
          onClick={() => {
            setNavigate("bikes");
          }}
        >
          Vélos
        </li>
      </ul>
    </aside>
  );
}
