import { useState } from "react";
import bike from "../../assets/bike.png";
import ButtonMoreInfo from "../ButtonMoreInfo/ButtonMoreInfo";
import "./cardProduct.scss";

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
    <div className="cardproduct-layout">
      {products.map((product) => {
        return (
          <div className="cardproduct-marge-swiper-">
            <img src={bike} alt={product.name} className="cardproduct-image " />
            <div className="cardproduct-layout-button">
              <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <div>
                <ButtonMoreInfo />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
