import { Link } from "react-router-dom";
import "./buttonLocation.scss";

export default function ButtonLocation() {
  return (
    <>
      <Link to={`{id}`} className="button-location">
        Loue-moi !
      </Link>
    </>
  );
}
