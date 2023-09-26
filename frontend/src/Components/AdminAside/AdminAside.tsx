import Image from "../../assets/Logo.png";
import "./adminAside.scss";
export default function AdminAside() {
  return (
    <aside>
      <img className="logo" src={Image} alt="Logo of RentBike" />
      <ul>
        <li>Ventes</li>
        <li>Utilisateurs</li>
        <li>Points de vente</li>
        <li>Vélos</li>
      </ul>
    </aside>
  );
}
