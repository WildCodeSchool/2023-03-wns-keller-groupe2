import { useQuery, gql } from "@apollo/client";
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
    <div className="cardproduct-container">
      <div className="cardproduct-grid">
        {data.getAllBike.map((product: Product) => {
          console.log(product);
          return (
            <div className="cardproduct" key={product.id}>
              <img
                src={product.imageId[0].url}
                alt={product.name}
                className="cardproduct-image "
              />
              <div className="cardproduct-layout-button">
                <div>
                  <p className="cardproduct-name">{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <div>
                  <div className="cardproduct-margin-button">
                    <ButtonMoreInfo id={product.id} />
                  </div>
                  <div>
                    <ButtonRent id={product.id} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
