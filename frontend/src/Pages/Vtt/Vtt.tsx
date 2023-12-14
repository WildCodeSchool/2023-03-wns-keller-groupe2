import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import "./vtt.scss";
import IconBack from "../../Components/IconBack/IconBack";

export default function Vtt() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/vtt") {
    category = "vtt";
    console.log(category);
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
