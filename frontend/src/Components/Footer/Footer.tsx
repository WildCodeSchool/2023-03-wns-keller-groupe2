import { Link } from "react-router-dom";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="permalinks">
        <Link to="/" className="footer">
          Accueil
        </Link>
        <Link to="/rgpd" className="footer">
          Politiques de confidentialités
        </Link>
        <Link to="/contact" className="footer">
          Contact
        </Link>
      </div>
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
      </div>
      <div className=".footer_copyright">
        <small>&copy; Rent Bike All rights reserved.</small>
      </div>
    </footer>
  );
}
