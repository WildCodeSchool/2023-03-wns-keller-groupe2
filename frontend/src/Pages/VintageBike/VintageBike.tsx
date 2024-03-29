import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import "./vintageBike.scss";
import IconBack from "../../Components/IconBack/IconBack";

export default function VintageBike() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/vintageBike") {
    category = "vélos vintage";
  }
  return (
    <div>
      <IconBack />
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">{category.toUpperCase()}</h1>
          <div className="bike-card">
            <CardProduct category={category} />
          </div>
        </div>
      </div>
    </div>
  );
}
