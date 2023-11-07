import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./vintageBike.scss";

export default function VintageBike() {
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Vélos Vintages</h1>
        <div className="bike-card">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}
