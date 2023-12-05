import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./addShopForm.scss";

const ADD_SHOP = gql`
  mutation Mutation(
    $email: String!
    $phonenum: Float!
    $location: String!
    $name: String!
  ) {
    createShop(
      email: $email
      phonenum: $phonenum
      location: $location
      name: $name
    )
  }
`;

export default function AddShopForm() {
  const [newShop, setNewShop] = useState({
    name: "",
    location: "",
    email: "",
    phonenum: "",
  });

  const [addShop, { data, error }] = useMutation(ADD_SHOP);
  if (data) {
    console.log("data from mutation", data.addShop);
  }

  if (error) {
    console.error(error);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(newShop);
    const phonenum = parseInt(newShop.phonenum);
    const { name, location, email } = newShop;
    const response = addShop({
      variables: { name, location, email, phonenum },
    });
    console.log(response);
  };

  return (
    <>
      <section className="add-shop-section">
        <h2>Formulaire d'ajout d'un Magasin</h2>
        <form className="add-shop-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="add-shop-label">
            Nom du magasin
            <input
              className="add-shop-input"
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setNewShop({ ...newShop, name: e.target.value });
              }}
            />
          </label>
          <label htmlFor="location" className="add-shop-label">
            Localisation
            <input
              className="add-shop-input"
              type="text"
              name="location"
              id="location"
              onChange={(e) => {
                setNewShop({ ...newShop, location: e.target.value });
              }}
            />
          </label>
          <label htmlFor="email" className="add-shop-label">
            Email
            <input
              className="add-shop-input"
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setNewShop({ ...newShop, email: e.target.value });
              }}
            />
          </label>
          <label htmlFor="phonenum" className="add-shop-label">
            Numéro de téléphone
            <input
              className="add-shop-input"
              type="text"
              name="phonenum"
              id="phonenum"
              onChange={(e) => {
                setNewShop({ ...newShop, phonenum: e.target.value });
              }}
            />
          </label>
          <button type="submit" className="add-shop-input">
            Ajouter
          </button>
        </form>
      </section>
    </>
  );
}
