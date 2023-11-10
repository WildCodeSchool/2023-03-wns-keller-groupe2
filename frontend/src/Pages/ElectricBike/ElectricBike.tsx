import { useState } from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import MessageError from "../../Components/MessageError/MessageError";
import "./electricBike.scss";

export default function ElectricBike() {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Vélos Electriques</h1>
        <div className="bike-card">
          {hasError ? (
            <MessageError />
          ) : (
            <CardProduct
              category={"electrique"}
              onError={handleError}
            />
          )}
        </div>
      </div>
    </div>
  );
}
