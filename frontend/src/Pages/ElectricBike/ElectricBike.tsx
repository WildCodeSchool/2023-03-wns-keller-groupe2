import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NavBar/NavBar";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./electricBike.scss";

export default function ElectricBike() {
  return (
    <div>
      <NavBar />
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">Vélos Electriques</h1>
          <div className="bike-card">
            <CardProduct />
          </div>
        </div>
      </div>
    </div>
  );
}
