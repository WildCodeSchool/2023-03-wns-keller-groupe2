import { NavLink } from "react-router-dom";


export default function navBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/veloElec">Vélo électrique</Link>
        </li>
        <li>
          <Link to="/vtt">VTT</Link>
        </li>
        <li>
          <Link to="/veloPro">Vélo professionelles</Link>
        </li>
        <li>
          <Link to="/veloVintage">Vélo Vintage</Link>
        </li>
        <li>
          <Link to="/accessoires">Accessoires vélos</Link>
        </li>
      </ul>
    </nav>
  );
}
