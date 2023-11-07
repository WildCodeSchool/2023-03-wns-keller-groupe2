import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./accessories.scss";

export default function Accessories() {
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Accessoires</h1>
        <div className="bike-card">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}
