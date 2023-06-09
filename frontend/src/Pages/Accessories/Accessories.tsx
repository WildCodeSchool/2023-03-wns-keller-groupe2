import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NarBar/NavBar";
import "./accessories.scss";

export default function Accessories() {
  return (
    <div>
      <NavBar />
      <h1 className="accessories-title">Accessoires Vélos</h1>
      <div className="accessories-card">
        <CardProduct />
      </div>
    </div>
  );
}
