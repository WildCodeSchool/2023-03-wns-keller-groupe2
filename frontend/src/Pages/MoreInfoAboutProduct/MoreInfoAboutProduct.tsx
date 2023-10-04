import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";

export default function MoreInfoAboutProduct() {
  const { id } = useParams();
  return (
    <>
      <NavBar />
      <ProductDetails id={id} />
    </>
  );
}
