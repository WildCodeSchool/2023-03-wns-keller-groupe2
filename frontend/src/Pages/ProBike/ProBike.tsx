import CardProduct from "../../Components/CardProduct/CardProduct";
import SideFilter from "../../Components/sideFilter/SideFilter";
import { useState } from "react";
import MessageError from "../../Components/MessageError/MessageError";
import { useLocation } from "react-router-dom";
import "./proBike.scss";

export default function ProBike() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = (isLoading: boolean) => {
    setLoading(isLoading);
    setHasError(!isLoading);
  };

  const location = useLocation();

  return (
    <>
      {location.pathname === "/proBike"}
      <div className="bike-display">
        <SideFilter />
        <div className="bike-parent-title-card">
          <h1 className="bike-title">Vélos Professionnels</h1>
          <div className="bike-card">
            {!loading || hasError ? (
              <MessageError />
            ) : (
              <CardProduct
                category="vélos professionels"
                onError={handleError}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
