import "./FormAdress.scss";

export default function FormAdress() {
  return (
    <form className="form-adress">
      <label htmlFor="dateOfStart" className="adress-form-label">
        Date de départ
        <input type="date" name="dateOfStart" />
      </label>
      <label htmlFor="shopStart" className="adress-form-label">
        Magasin de récupération
        <select name="shopStart">
          <option value="">--Choisissez le magasin</option>
          <option value="Lille">Lille</option>
          <option value="Paris">Paris</option>
          <option value="Quesnoy">Quesnoy sur Deule</option>
        </select>
      </label>
      <label htmlFor="dateOfEnd" className="adress-form-label">
        Date de fin
        <input type="date" name="dateOfEnd" />
      </label>
      <label htmlFor="shopEnd" className="adress-form-label">
        Magasin de retour
        <select name="shopEnd">
          <option value="">--Choisissez le magasin</option>
          <option value="Lille">Lille</option>
          <option value="Paris">Paris</option>
          <option value="Quesnoy">Quesnoy sur Deule</option>
        </select>
      </label>
      <input type="submit" value="Valider" />
    </form>
  );
}
