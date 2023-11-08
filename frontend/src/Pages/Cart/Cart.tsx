import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import MyCart from "../../Components/MyCart/MyCart";
import MySum from "../../Components/MySum/MySum";
import "./style.scss";

export default function Cart() {
  return (
    <div className="cartPage">
      <h2>Récapitulatif de votre panier</h2>
      <BuyProgressBar />
      <div className="partitionHorizontal"></div>
      <section className="myCart">
        <MyCart />
      </section>
      <div className="partitionHorizontal"></div>
      <section className="myTotal">
        <MySum />
      </section>
    </div>
  );
}
