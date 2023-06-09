import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NavBar/NavBar";
import "./vintageBike.scss";

export default function VintageBike() {
  return (
    <div>
      <NavBar />
      <h1 className="vintage-bike-title">Vélos Vintages</h1>
      <div className="vintage-bike-card">
        <CardProduct />
      </div>
    </div>
  );
}
