import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { slide as Menu } from "react-burger-menu";
import "./navBar.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Menu
        width={"100%"}
        isOpen={isOpen}
        onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
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
          Se connecter / S'inscrire
        </Link>
        <Link to="/" className="navbar-link">
          Déconnexion
        </Link>
      </Menu>

      <nav className={`navbar ${isOpen ? "navbar-open" : ""}`}>
        <button className="burger-button" onClick={handleMenuClick}>
          <div className="burger-icon"></div>
        </button>
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
            <Link to="/proBike" className="navbar-link">
              Vélos professionnels
            </Link>
          </li>
          <li className="navbar-list">
            <Link to="/vintageBike" className="navbar-link">
              Vélos Vintages
            </Link>
          </li>
          <li className="navbar-list">
            <Link to="/accessories" className="navbar-link">
              Accessoires vélos
            </Link>
          </li>
          <li className="navbar-list navbar-list-icon">
            <Link to="/cart" className="navbar-link">
              <div className="navbar-icon">
                <AiOutlineShoppingCart />
              </div>
            </Link>
          </li>
          <li className="navbar-list navbar-list-icon">
            <Link to="/login" className="navbar-link">
              <div className="navbar-icon">
                <VscAccount />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
