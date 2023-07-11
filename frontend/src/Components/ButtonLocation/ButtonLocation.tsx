import { Link } from "react-router-dom";
import "./buttonBuy.scss";

export default function ButtonLocation() {
  return (
    <>
      <Link to={`{id}`} className="button-location">
        Plus d'infos
      </Link>
    </>
  );
}
