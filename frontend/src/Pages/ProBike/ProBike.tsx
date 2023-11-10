import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useState } from "react";
import MessageError from "../../Components/MessageError/MessageError";
import "./proBike.scss";

export default function ProBike() {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Vélos Professionnels</h1>
        <div className="bike-card">
          {hasError ? (
            <MessageError />
          ) : (
            <CardProduct
              category={"vélos professionels"}
              onError={handleError}
            />
          )}
        </div>
      </div>
    </div>
  );
}
