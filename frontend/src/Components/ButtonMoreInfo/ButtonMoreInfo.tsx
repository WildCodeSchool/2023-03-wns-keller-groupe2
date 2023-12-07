import { Link } from "react-router-dom";
import "./buttonMoreInfo.scss";

interface ProductId {
  id: number;
}

export default function ButtonMoreInfo({ id }: ProductId) {
  return (
    <Link to={`/moreinfoaboutbike/${id}`} className="button-more-info">
      Plus d'infos
    </Link>
  );
}
