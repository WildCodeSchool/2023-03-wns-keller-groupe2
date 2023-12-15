import { useState } from "react";
import SideFilter from "../../Components/sideFilter/SideFilter";
import MessageError from "../../Components/MessageError/MessageError";
import "./accessories.scss";

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
    <div className="accessories-display">
      <SideFilter />
      <div className="accessories-parent-title-card">
        <h1 className="accessories-title">Accessoires</h1>
        <div className="accessories-card">
          {hasError ? <MessageError /> : <MessageError />}
        </div>
      </div>
    </div>
  );
}
