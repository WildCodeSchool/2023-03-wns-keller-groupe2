import { GiAutoRepair } from "react-icons/gi";
import "./messageError.scss";

export default function MessageError() {
  return (
    <div className="messageError">
      <GiAutoRepair className="iconError" />
      <h1 className="messageError">
        Oops !!! Un problème technique est survenu.
      </h1>
      <div className="messageError">
        L'équipe met tout en oeuvre pour réparer au plus vite.
      </div>
    </div>
  );
}
