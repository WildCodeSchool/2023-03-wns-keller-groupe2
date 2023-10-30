import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./proBike.scss";

export default function ProBike() {
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Vélos Professionnels</h1>
        <div className="bike-card"></div>
        <CardProduct />
      </div>
    </div>
  );
}
