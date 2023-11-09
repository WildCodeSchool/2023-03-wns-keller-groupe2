import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Navigate } from "react-router-dom";
import CustomForm from "../CustomForm/CustomForm";

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
    <CustomForm
      onSubmit={handleSubmit}
      title="Inscription"
      fields={[
        {
          type: "email",
          placeholder: "E-mail",
          onChange: (e) => setEmail(e.target.value),
        },
        {
          type: "text",
          placeholder: "Nom",
          onChange: (e) => setLastName(e.target.value),
        },
        {
          type: "text",
          placeholder: "Prénom",
          onChange: (e) => setFirstName(e.target.value),
        },
        {
          type: "select",
          placeholder: "Genre",
          options: ["Homme", "Femme"],
          onChange: (e) => setGender(e.target.value),
        },
        {
          type: "password",
          placeholder: "Mot de passe",
          isPassword: true,
          onChange: (e) => setPassword(e.target.value),
        },
        {
          type: "text",
          placeholder: "Numéro de téléphone",
          onChange: (e) => setPhonenum(e.target.value),
        },
      ]}
      buttonText="Inscription"
    />
  );
}
