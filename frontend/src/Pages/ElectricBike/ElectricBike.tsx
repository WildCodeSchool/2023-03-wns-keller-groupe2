import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import MessageError from "../../Components/MessageError/MessageError";
import "./electricBike.scss";

export default function ElectricBike() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/veloElec") {
    category = "electrique";
  }
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">{category.toUpperCase()}</h1>
        <div className="bike-card">
          <CardProduct category={category} />
        </div>
      </div>
    </div>
  );
}
