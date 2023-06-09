import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NavBar/NavBar";
import "./proBike.scss";

export default function ProBike() {
  return (
    <div>
      <NavBar />
      <h1 className="pro-bike-title">Vélos Professionnels</h1>
      <div className="pro-bike-card">
        <CardProduct />
      </div>
    </div>
  );
}
