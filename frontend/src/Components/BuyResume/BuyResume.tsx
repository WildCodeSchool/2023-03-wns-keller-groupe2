import Image from "../../assets/bicycle.png";
import "./buyResume.scss";

export default function BuyResume() {
  return (
    <article className="buy-resume">
      <h2>Vos reservation</h2>
      <div className="bike-picture-list">
        <img src={Image} alt="" className="bike-picture" />
        <img src={Image} alt="" className="bike-picture" />
        <img src={Image} alt="" className="bike-picture" />
      </div>
      <h2>Votre adresse de facturation</h2>
      <p className="tenant-name">Mme Ammeux Priscillia</p>
      <p className="tenant-adress">13, Avenue du Paradis 59000 Lille</p>
      <h2>Lieu de retrait</h2>
      <p className="shop-name">WildRent Lille</p>
      <p className="shop-adress">12, Avenue des champs 59000 Lille</p>
      <button className="shop-location">Localiser</button>
    </article>
  );
}
