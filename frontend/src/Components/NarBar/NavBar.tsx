import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./navBar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-item">
        <img src={logo} alt="Logo Rent Bike" className="navbar-logo" />
        <li className="navbar-list">
          <Link to="/" className="navbar-link">
            Accueil
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/veloElec" className="navbar-link">
            Vélos électriques
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/vtt" className="navbar-link">
            VTT
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/" className="navbar-link">
            Vélos professionnels
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/" className="navbar-link">
            Vélos Vintages
          </Link>
        </li>
        <li className="navbar-list">
          <Link to="/" className="navbar-link">
            Accessoires vélos
          </Link>
        </li>
        <li className="navbar-list navbar-list-icon">
          <div className="navbar-icon">
            <AiOutlineShoppingCart />
          </div>
          <Link to="/" className="navbar-link">
            Mon panier
          </Link>
        </li>
        <li className="navbar-list navbar-list-icon">
          <div className="navbar-icon">
            <VscAccount />
          </div>
          <Link to="/" className="navbar-link">
            Mon compte
          </Link>
        </li>
      </ul>
    </nav>
  );
}
