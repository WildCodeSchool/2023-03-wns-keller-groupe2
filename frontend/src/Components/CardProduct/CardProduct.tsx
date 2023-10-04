import { useQuery, gql } from "@apollo/client";
import bike from "../../assets/bike.png";
import ButtonMoreInfo from "../ButtonMoreInfo/ButtonMoreInfo";
import ButtonRent from "../ButtonRent/ButtonRent";
import "./cardProduct.scss";

interface Product {
  id: number;
  name: string;
  imageId: Image[];
  price: string;
}

interface Image {
  url: string;
}

const GET_ALL_BIKE = gql`
  query GetAllShop {
    getAllBike {
      id
      name
      imageId {
        url
      }
    }
  }
`;

export default function CardProduct() {
  const { loading, error, data } = useQuery(GET_ALL_BIKE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="cardproduct-layout">
      {data.getAllBike.map((product: Product) => {
        return (
          <div className="cardproduct-marge-swiper-" key={product.id}>
            <img src={bike} alt={product.name} className="cardproduct-image " />
            <div className="cardproduct-layout-button">
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <div>
                <ButtonMoreInfo id={0} />
                <ButtonRent id={0} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
