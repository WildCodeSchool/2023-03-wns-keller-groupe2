import BuyProgressBar from "../../Components/BuyProgressBar/BuyProgressBar";
import MyCart from "../../Components/MyCart/MyCart";
import MySum from "../../Components/MySum/MySum";
import { useContext } from "react";
import { RentContext } from "../../services/context/rentContext";
import { gql, useQuery } from "@apollo/client";
import "./style.scss";

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

export default function Cart() {
  const rentContext = useContext(RentContext);
  const { loading, error, data } = useQuery(GET_BIKE_BY_ID, {
    variables: { getBikeById: rentContext.id },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(rentContext);
  console.log(data);

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
