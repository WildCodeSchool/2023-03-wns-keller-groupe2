import { useQuery, gql } from "@apollo/client";
import RangeSlide from "../RangeSlide/RangeSlide";

interface Brand {
  id: number;
  name: string;
}

const GET_ALL_BRANDS = gql`
  query Query {
    getAllBikeCategories {
      id
      name
    }
  }
`;

export default function Filter() {
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="filter">
      <h2>Vos Filtres</h2>
      <h3>Prix:</h3>
      <RangeSlide />
      <h3>Genre:</h3>
      <ul>
        <li>Homme</li>
        <li>Femme</li>
        <li>Enfant</li>
      </ul>
      <h3>Marques:</h3>
      <ul>
        {data.getAllBikeCategories.map((brand: Brand) => {
          return <li key={brand.id}>{brand.name}</li>;
        })}
      </ul>
      <h3>Durée:</h3>
      <RangeSlide />
    </div>
  );
}
