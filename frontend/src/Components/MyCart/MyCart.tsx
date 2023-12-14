import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useState, useContext } from "react";
import { RentContext } from "../../services/context/rentContext";
import { gql, useQuery } from "@apollo/client";
import CardError from "../CardError/CardError";
import "./style.scss";

const GET_BIKE_BY_ID = gql`
  query GetAllBike($getBikeById: Float!) {
    getBikeById(id: $getBikeById) {
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

type setSumProps = {
  setSum: React.Dispatch<React.SetStateAction<number>>;
};

export default function MyCart({ setSum }: setSumProps) {
  const [count, setCount] = useState(1);
  const rentContext = useContext(RentContext);
  const { loading, error, data } = useQuery(GET_BIKE_BY_ID, {
    variables: { getBikeById: rentContext?.rent.id },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <CardError />;

  setSum(data.getBikeById.price);

  return (
    <div className="myCart">
      <img src={data.getBikeById.imageId[0].url} alt={data.getBikeById.name} />
      <section className="productInfo">
        <h4 className="productName">{data.getBikeById.name}</h4>
        <p className="dateOfRent">Date de location: 12/05 au 15/05</p>
        <button className="moreInfo" type="button">
          Voir le produit
        </button>
      </section>
      <section className="moreLessProduct">
        <button
          className="moreButton"
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}>
          <BsPlusLg />
        </button>
        <p className="productCount">{count}</p>
        <button
          className="lessButton"
          type="button"
          onClick={() => {
            setCount(count - 1);
          }}>
          <BiMinus />
        </button>
        <button className="deletButton" type="button">
          <BsFillTrash3Fill />
        </button>
      </section>
      <p className="price">{data.getBikeById.price} €</p>
    </div>
  );
}
