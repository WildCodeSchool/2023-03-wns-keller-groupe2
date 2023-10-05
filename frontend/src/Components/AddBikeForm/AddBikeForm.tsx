import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./addBikeForm.scss";

const ADD_BIKE = gql`
  mutation Mutation(
    $dateMaintenance: DateTime!
    $disponibility: Boolean!
    $price: Float!
    $gender: String!
    $size: Float!
    $descritpion: String!
    $name: String!
  ) {
    createBike(
      dateMaintenance: $dateMaintenance
      disponibility: $disponibilityprice
      price: $price
      gender: $gender
      size: $size
      descritpion: $descritpion
      name: $name
    )
  }
`;

export default function AddBikeForm() {
  const [newBike, setNewBike] = useState({
    name: "",
    gender: "",
    size: "",
    description: "",
    price: "",
    maintenance: "",
    disponibility: true,
  });
  const [addBike, { data, error }] = useMutation(ADD_BIKE);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBike({ ...newBike, [e.target.name]: e.target.value });
    console.log(newBike);
  };
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    console.log(newBike);

    try {
      const response = await addBike({
        variables: { newBike },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="add-bike-section">
      <h2>Formulaire d'ajout de vélo</h2>
      <form className="add-bike-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="add-bike-label">
          Nom du vélo:
          <input
            className="add-bike-input"
            name="name"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label htmlFor="gender" className="add-bike-label">
          Destiner aux:
          <select id="pet-select">
            <option value="">--Selectionner un genre--</option>
            <option value="féminin">Femme</option>
            <option value="masculin">Homme</option>
          </select>
        </label>
        <label htmlFor="size" className="add-bike-label">
          Taille du vélo:
          <input
            className="add-bike-input"
            name="size"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label htmlFor="description" className="add-bike-label">
          Description du vélo:
          <textarea name="description" id="" cols={30} rows={10}></textarea>
        </label>
        <label htmlFor="price" className="add-bike-label">
          Prix du vélo:
          <input
            className="add-bike-input"
            name="price"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label htmlFor="maintenance" className="add-bike-label">
          Date de derniére maintenance:
          <input
            className="add-bike-input"
            name="maintenance"
            type="date"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <input type="submit" value="Ajouter" />
      </form>
    </section>
  );
}
