import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import bycicle from "../../assets/bicycle.png";
import { useState } from "react";
import { useContext } from "react";
import { RentContext } from "../../services/context/rentContext";
import { gql, useQuery } from "@apollo/client";
import "./style.scss";
import CardError from "../CardError/CardError";

const GET_BIKE_BY_ID = gql`
  query GetAllBike($getBikeByIdId: Float!) {
    getBikeById(id: $getBikeByIdId) {
      name
      description
      disponibility
      size
      gender
      price
      imageId {
        url
      }
    }
  }
`;

export default function MyCart() {
  const [count, setCount] = useState(0);
  const rentContext = useContext(RentContext);
  console.log("Id vélo", rentContext?.rent.id);
  console.log("Type Id vélo", typeof rentContext?.rent.id);
  const { loading, error, data } = useQuery(GET_BIKE_BY_ID, {
    variables: { getBikeById: rentContext?.rent.id },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <CardError />;
  console.log(rentContext);
  console.log(data);
  return (
    <div className="myCart">
      <img src={bycicle} alt="Productimage" />
      <section className="productInfo">
        <h4 className="productName">Cannondale - vélo Route</h4>
        <p className="dateOfRent">Date de location: 12/05 au 15/05</p>
        <button className="moreInfo" type="button">
          {" "}
          Voir le produit
        </button>
      </section>
      <section className="moreLessProduct">
        <button
          className="moreButton"
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <BsPlusLg />
        </button>
        <p className="productCount">{count}</p>
        <button
          className="lessButton"
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <BiMinus />
        </button>
        <button className="deletButton" type="button">
          <BsFillTrash3Fill />
        </button>
      </section>
      <p className="price">1750 €</p>
    </div>
  );
}
