import CardProduct from "../../Components/CardProduct/CardProduct";
import NavBar from "../../Components/NarBar/NavBar";
import "./vtt.scss";

export default function VTT() {
  return (
    <div>
      <NavBar />
      <h1 className="vtt-bike-title">VTT</h1>
      <div className="vtt-bike-card">
        <CardProduct />
      </div>
    </div>
  );
}
