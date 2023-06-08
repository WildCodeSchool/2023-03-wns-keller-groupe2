import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
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
