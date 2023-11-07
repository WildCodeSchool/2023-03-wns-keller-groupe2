import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./vtt.scss";

export default function VTT() {
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">VTT</h1>
        <div className="bike-card">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}
