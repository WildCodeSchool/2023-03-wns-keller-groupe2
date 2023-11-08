import { useState } from "react";
import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import MyCart from "../../Components/MyCart/MyCart";
import MySum from "../../Components/MySum/MySum";
import "./style.scss";

export interface Sum {
  sum: number;
}

export default function Cart() {
  const [sum, setSum] = useState<number>(0);
  return (
    <div className="cartPage">
      <h2>Récapitulatif de votre panier</h2>
      <BuyProgressBar />
      <div className="partitionHorizontal"></div>
      <section className="myCart">
        <MyCart setSum={setSum} />
      </section>
      <div className="partitionHorizontal"></div>
      <section className="myTotal">
        <MySum sum={sum} />
      </section>
    </div>
  );
}
