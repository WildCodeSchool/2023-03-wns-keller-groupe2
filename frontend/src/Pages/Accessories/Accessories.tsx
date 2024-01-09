import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import IconBack from "../../Components/IconBack/IconBack";
import "./accessories.scss";

export default function Accessories() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/accessories") {
    category = "accessoires vélos";
  }
  return (
    <div>
      <IconBack />
      <div className="accessories-display">
        <SideFilter />
        <div className="accessories-parent-title-card">
          <h1 className="accessories-title">{category.toUpperCase()}</h1>
          <div className="accessories-card">
            <CardProduct category={category} />
          </div>
        </div>
      </div>
    </div>
  );
}
