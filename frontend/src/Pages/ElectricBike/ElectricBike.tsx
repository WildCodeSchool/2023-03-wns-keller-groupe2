import { useState } from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import MessageError from "../../Components/MessageError/MessageError";
import "./electricBike.scss";

export default function ElectricBike() {
  const location = useLocation();
  let category = "";

  if (location.pathname === "/veloElec") {
    category = "electrique";
    console.log(category);

    return (
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">{category.toUpperCase()}s</h1>
          <div className="bike-card">
            {category ? <CardProduct category={category} /> : <MessageError />}
          </div>
        </div>
      </div>
    );
  }
}
