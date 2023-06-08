import { useState } from "react";
import bike from "../../assets/bike.png";
import "./cardProduct.scss";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}


export default function CardProduct() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Kalkhoff",
      price: "1800 €",
      image: { bike },
    },
    {
      id: 2,
      name: "Moustache Bikes",
      price: "1950 €",
      image: { bike },
    },
    {
      id: 3,
      name: "Trek",
      price: "2100 €",
      image: { bike },
    },
    {
      id: 4,
      name: "Vélo de ville (VDV)",
      price: "1750 €",
      image: { bike },
    },
  ]);
  return (
    <ul className="cardproduct-contour">
      {products.map((product) => {
        return (
          <ul className="cardproduct-contour">
            {products.map((product) => {
              return (
                <>
                  <li key={product.id}>{product.name}</li>
                  <li>{product.price}</li>
                  <li>
                    <img src={product.image} alt={product.name} />
                  </li>
                </>
              );
            })}
          </ul>
        );
      })}
    </ul>
  );
}
