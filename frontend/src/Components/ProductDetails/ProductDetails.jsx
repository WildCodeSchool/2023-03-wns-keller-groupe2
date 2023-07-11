import { gql, useQuery } from "@apollo/client";
import "./style.scss";

const GET_BIKE_BY_ID = gql`
  query GetBikeById($getBikeByIdId: Float!) {
    getBikeById(id: $getBikeByIdId) {
      id
      name
      description
      disponibility
      size
      gender
    }
  }
`;

export default function ProductDetails({ id }) {
  const { loading, error, data } = useQuery(GET_BIKE_BY_ID, {
    variables: { getBikeByIdId: 1 },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <section className="productDetail">
      <article className="productIllustration">
        <img
          className="porductIllustration"
          src="https://media.discordapp.net/attachments/1126873629095895162/1126890123338973254/pexels-taryn-elliott-4198566.jpg?width=447&height=671"
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
