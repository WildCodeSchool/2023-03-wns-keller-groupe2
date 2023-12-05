import { useState } from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useLocation } from "react-router-dom";
import "./electricBike.scss";
import MessageError from "../../Components/MessageError/MessageError";

export default function ElectricBike() {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const location = useLocation();

  return (
    <>
      {location.pathname === "/veloElec"}
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">Vélos Electriques</h1>
          <div className="bike-card">
            {hasError ? (
              <MessageError />
            ) : (
              <CardProduct category="electrique" onError={handleError} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
