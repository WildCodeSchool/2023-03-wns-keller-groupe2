import logo from "../../assets/userIcon.png";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";
import "./style.scss";

const REGISTER = gql`
  mutation Mutation(
    $phonenum: String!
    $gender: String!
    $password: String!
    $email: String!
    $lastName: String!
    $firstName: String!
  ) {
    createUser(
      phonenum: $phonenum
      gender: $gender
      password: $password
      email: $email
      lastName: $lastName
      firstName: $firstName
    )
  }
`;

export default function RegisterForm() {
  const [lastName, setLastName] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [registerUser, { data, error }] = useMutation(REGISTER);

  if (data) {
    console.log("data from mutation", data.register);
    localStorage.setItem("token", data.register);
    return <Navigate to="/" />;
  }

  if (error) {
    console.log("error", error);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await registerUser({
        variables: { email, password, lastName, firstName, gender, phonenum },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-form">
      <div className="register-header">
        <img className="users-logo" src={logo} alt="users_icon" />
        <h1>Nouveau client</h1>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="label-form" htmlFor="mail">
          Email:
          <input
            className="input-register-form"
            type="email"
            name="mail"
            id="mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="label-form" htmlFor="lastName">
          Nom:
          <input
            className="input-register-form"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className="label-form" htmlFor="firstName">
          Prenom:
          <input
            className="input-register-form"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="label-form" htmlFor="gender">
          Genre:
          <select
            className="input-register-form"
            name="gender"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </label>
        <label className="label-form" htmlFor="password">
          Mot de passe:
          <input
            className="input-register-form"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="label-form" htmlFor="phonenum">
          Numéro de téléphone:
          <input
            className="input-register-form"
            type="text"
            name="phonenum"
            id="phonenum"
            value={phonenum}
            onChange={(event) => setPhonenum(event.target.value)}
          />
        </label>
        <button
          className="form-submit-button"
          type="submit"
          onClick={handleSubmit}>
          Inscription
        </button>
      </form>
    </div>
  );
}
