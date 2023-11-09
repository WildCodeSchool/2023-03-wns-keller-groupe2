import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "../../style-form.scss";

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
  const [showPassword, setShowPassword] = useState(false);

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
    <form className="style-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Nouveau client</h1>
      <input
        placeholder="E-mail"
        className="form-input"
        type="email"
        name="mail"
        id="mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="Nom"
        className="form-input"
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        placeholder="Prénom"
        className="form-input"
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <select
        placeholder="Genre"
        className="form-input"
        name="gender"
        id="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}>
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
      </select>
      <div className="input-wrapper">
        <input
          placeholder="Mot de passe"
          className="form-input"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>
      <input
        placeholder="Numéro de téléphone"
        className="form-input"
        type="text"
        name="phonenum"
        id="phonenum"
        value={phonenum}
        onChange={(event) => setPhonenum(event.target.value)}
      />
      <button className="form-button" type="submit" onClick={handleSubmit}>
        Inscription
      </button>
    </form>
  );
}
