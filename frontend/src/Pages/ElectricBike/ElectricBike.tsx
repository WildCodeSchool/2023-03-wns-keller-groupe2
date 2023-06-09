import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NavBar/NavBar";
import "./electricBike.scss";

export default function ElectricBike() {
  return (
    <div>
      <NavBar />
      <h1 className="electric-bike-title">Vélos Electriques</h1>
      <div className="electric-bike-card">
        <CardProduct />
      </div>
    </div>
  );
}
