import { useQuery, gql } from "@apollo/client";
import ButtonMoreInfo from "../ButtonMoreInfo/ButtonMoreInfo";
import ButtonRent from "../ButtonRent/ButtonRent";
import "./cardProduct.scss";

interface Product {
  bikeCategoriesId: any;
  id: number;
  name: string;
  imageId: Image[];
  price: string;
}

interface Image {
  url: string;
}

interface CardProductProps {
  category: string;
  onError: () => void;
}

const GET_ALL_BIKE = gql`
  query GetAllShop {
    getAllBike {
      id
      name
      imageId {
        url
      }
      bikeCategoriesId {
        name
      }
    }
  }
`;

export default function CardProduct({ category, onError }: CardProductProps) {
  const { loading, error, data } = useQuery(GET_ALL_BIKE);

  if (loading) return <p>Loading...</p>;
  if (error) return <>Error :(error.message)</>;

  if (!data) return null;

  const filteredProducts = data.getAllBike.filter(
    (product: Product) => product.bikeCategoriesId.name === category
  );

  console.log(data);
  console.log(category);

  if (filteredProducts.length === 0) {
    onError();
    return null;
  }

  return (
    <div className="cardproduct-container">
      <div className="cardproduct-grid">
        {filteredProducts.map((product: Product) => {
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
          </div>;
        })}
      </div>
    </div>
  );
}
