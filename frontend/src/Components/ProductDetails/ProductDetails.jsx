import { gql, useQuery } from "@apollo/client";
import "./style.scss";

const GET_BIKE_BY_ID = gql`
  query GetBikeById($getBikeByIdId: Float!) {
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

export default function ProductDetails({ id }) {
  const newId = parseInt(id, 10);
  const { loading, error, data } = useQuery(GET_BIKE_BY_ID, {
    variables: { getBikeByIdId: newId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <section className="productDetail">
      <article className="productIllustration">
        <img
          className="porductIllustration"
          src={data.getBikeById.imageId[0].url}
          alt="Vélo hollandais"
        />
      </article>
      <article className="productDescription">
        <h2>{data.getBikeById.name}</h2>
        <p>Cadre de type: {data.getBikeById.gender}</p>
        <p>{data.getBikeById.description}</p>
      </article>
    </section>
  );
}
