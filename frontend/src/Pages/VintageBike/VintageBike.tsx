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
  const category = location.pathname.slice(1);

  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">{category.toUpperCase()}</h1>
        <div className="bike-card">
          {hasError ? (
            <MessageError />
          ) : (
            <CardProduct category={category} onError={handleError} />
          )}
        </div>
      </div>
    </div>
  );
}
