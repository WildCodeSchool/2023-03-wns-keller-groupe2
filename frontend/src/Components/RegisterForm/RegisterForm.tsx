import logo from "../../assets/userIcon.png";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";
import "./style.scss";

const REGISTER = gql`
  mutation Mutation(
    $admin: Boolean!
    $phonenum: String!
    $dob: DateTime!
    $gender: String!
    $password: String!
    $email: String!
    $lastName: String!
    $firstName: String!
  ) {
    createUser(
      admin: $admin
      phonenum: $phonenum
      dob: $dob
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
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
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
        variables: { email, password },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registerForm">
      <div className="registerHeader">
        <img className="usersLogo" src={logo} alt="users_icon" />
        <h1>Nouveau client</h1>
      </div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="labelForm" htmlFor="mail">
          Email:
          <input
            className="inputRegisterForm"
            type="email"
            name="mail"
            id="mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="lastName">
          Nom:
          <input
            className="inputRegisterForm"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="firstName">
          Prenom:
          <input
            className="inputRegisterForm"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="gender">
          Genre:
          <select
            className="inputRegisterForm"
            name="gender"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </label>
        <label className="labelForm" htmlFor="dob">
          Date de naissance:
          <input
            className="inputRegisterForm"
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="password">
          Mot de passe:
          <input
            className="inputRegisterForm"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="confPassword">
          Confirmer mot de passe:
          <input
            className="inputRegisterForm"
            type="password"
            name="confPassword"
            id="confPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <button
          className="formSubmitButton"
          type="submit"
          onClick={handleSubmit}>
          Inscription
        </button>
      </form>
    </div>
  );
}
