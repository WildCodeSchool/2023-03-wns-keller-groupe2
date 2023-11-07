import { useParams } from "react-router-dom";
import ProductDetails from "../../Components/ProductDetails/ProductDetails";

export default function MoreInfoAboutProduct() {
  const { id } = useParams();
  return <ProductDetails id={id} />;
}
