import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useState } from "react";
import MessageError from "../../Components/MessageError/MessageError";
import { useLocation } from "react-router-dom";
import "./vintageBike.scss";

export default function VintageBike() {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const location = useLocation();

  return (
    <>
      {location.pathname === "/vintageBike"}
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">Vélos Vintages</h1>
          <div className="bike-card">
            {hasError ? (
              <MessageError />
            ) : (
              <CardProduct category="vélos vintage" onError={handleError} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
