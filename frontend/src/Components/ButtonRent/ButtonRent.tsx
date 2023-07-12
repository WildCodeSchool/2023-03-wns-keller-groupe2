import { useContext } from "react";
import { RentContext } from "../../services/context/rentContext";
import "./buttonRent.scss";

interface Props {
  id: number;
}

export default function ButtonRent({ id }: Props) {
  const rentContext = useContext(RentContext);

  function handleClick() {
    if (rentContext) {
      rentContext.setRent({
        id: id,
      });
    }
    console.log(rentContext?.rent.id);
    return id;
  }

  return (
    <button className="button" onClick={handleClick}>
      Louez moi !
    </button>
  );
}
