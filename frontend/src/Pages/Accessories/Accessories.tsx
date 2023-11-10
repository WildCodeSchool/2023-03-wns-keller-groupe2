import { useState } from "react";
import SideFilter from "../../Components/sideFilter/SideFilter";
import "./accessories.scss";
import MessageError from "../../Components/MessageError/MessageError";

export default function Accessories() {
  const [
    hasError,
    //to remove when the component will be ready
    // setHasError
  ] = useState(false);

  //to remove when the component will be ready
  // const handleError = () => {
  //   setHasError(true);
  // };
  return (
    <div className="bike-display">
      <SideFilter />
      <div className="bike-parent-title-card">
        <h1 className="bike-title">Accessoires</h1>
        <div className="bike-card">
          {hasError ? <MessageError /> : <MessageError />}
        </div>
      </div>
    </div>
  );
}
