import RangeSlide from "../RangeSlide/RangeSlide";

export default function Filter() {
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
      <h3>Durée:</h3>
      <RangeSlide />
    </div>
  );
}
