import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import IconBack from "../../Components/IconBack/IconBack";
import "./electricBike.scss";
import { useState } from "react";

export interface SideFilter {
  sideFilter: string;
  setSideFilter: (sideFilter: string) => void;
}

export default function ElectricBike() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/veloElec") {
    category = "electrique";
  }
  const [sideFilter, setSideFilter] = useState("");
  return (
    <div>
      <IconBack />
      <div className="bike-display">
        <SideFilter sideFilter={sideFilter} setSideFilter={setSideFilter} />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">{category.toUpperCase()}</h1>
          <div className="bike-card">
            <CardProduct category={category} />
          </div>
        </div>
      </div>
    </div>
  );
}
