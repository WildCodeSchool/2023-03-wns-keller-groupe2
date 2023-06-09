import { useState } from "react";
import bike from "../../assets/bike.png";
import "./cardProduct.scss";
import ButtonMoreInfo from "../ButtonMoreInfo/ButtonMoreInfo";

interface Product {
  id: number;
  name: string;
  price: string;
}

export default function CardProduct() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Kalkhoff",
      price: "1800 €",
    },
    {
      id: 2,
      name: "Moustache Bikes",
      price: "1950 €",
    },
    {
      id: 3,
      name: "Trek",
      price: "2100 €",
    },
    {
      id: 4,
      name: "Vélo de ville (VDV)",
      price: "1750 €",
    },
  ]);
  return (
    <ul className="cardproduct-display">
      {products.map((product) => {
        return (
          <div key={product.id} className="cardproduct-contour">
            <li>
              <img
                src={bike}
                alt={product.name}
                className="cardproduct-image "
              />
            </li>
            <div className="cardproduct-display-button">
              <div>
                <li>{product.name}</li>
                <li>{product.price}</li>
              </div>

              <div>
                <ButtonMoreInfo />
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
