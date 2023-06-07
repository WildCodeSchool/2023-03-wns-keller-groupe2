import { Link } from "react-router-dom";
import "./navBar.scss";
import logo from "../Assets/Logo.png";

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="item">
        <img src={logo} alt="Logo Rent Bike" className="logo" />
        <li className="list">
          <Link to="/" className="link">
            Accueil
          </Link>
        </li>
        <li className="list">
          <Link to="/veloElec" className="link">
            Vélo électrique
          </Link>
        </li>
        <li className="list">
          <Link to="/vtt" className="link">
            VTT
          </Link>
        </li>
        <li className="list">
          <Link to="/veloPro" className="link">
            Vélo professionelles
          </Link>
        </li>
        <li className="list">
          <Link to="/veloVintage" className="link">
            Vélo Vintage
          </Link>
        </li>
        <li className="list">
          <Link to="/accessoires" className="link">
            Accessoires vélos
          </Link>
        </li>
        <li className="list">
          <Link to="/panier" className="link">
            Mon panier
          </Link>
        </li>
        <li className="list">
          <Link to="/compte" className="link">
            Mon compte
          </Link>
        </li>
      </ul>
    </nav>
  );
}
