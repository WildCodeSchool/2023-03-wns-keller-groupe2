import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NavBar/NavBar";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./vintageBike.scss";

export default function VintageBike() {
  return (
    <div>
      <NavBar />
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">Vélos Vintages</h1>
          <div className="bike-card"></div>
          <CardProduct />
        </div>
      </div>
    </div>
  );
}
