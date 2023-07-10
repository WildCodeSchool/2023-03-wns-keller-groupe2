import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./navBar.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Menu right>
        <img src={logo} alt="Logo Rent Bike" className="navbar-logo" />
        <Link to="/" className="navbar-link">
          Accueil
        </Link>
        <Link to="/veloElec" className="navbar-link">
          Vélos électriques
        </Link>
        <Link to="/vtt" className="navbar-link">
          VTT
        </Link>
        <Link to="/proBike" className="navbar-link">
          Vélos professionnels
        </Link>
        <Link to="/vintageBike" className="navbar-link">
          Vélos Vintages
        </Link>
        <Link to="/accessories" className="navbar-link">
          Accessoires vélos
        </Link>
        <Link to="/cart" className="navbar-link">
          Mon panier
        </Link>
        <Link to="/login" className="navbar-link">
          Mon compte
        </Link>
      </Menu>
    </nav>
  );
}
