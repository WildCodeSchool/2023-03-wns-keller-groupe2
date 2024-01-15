import RangeSlide from "../RangeSlide/RangeSlide";

export default function Filter(value: any, newValue: any) {
  return (
    <div className="filter">
      <h2>Vos Filtres</h2>
      <h3>Prix:</h3>
      <RangeSlide />
      <h3>Genre:</h3>
      <ul>
        <label htmlFor="">
          <input type="checkbox" value={} />
        </label>
        <li>Femme</li>
        <li>Enfant</li>
      </ul>
      <h3>Durée:</h3>
      <RangeSlide />
    </div>
  );
}
