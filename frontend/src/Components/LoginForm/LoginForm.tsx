import { useState, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../../services/context/userContext";
import CustomForm from "../CustomForm/CustomForm";


const LOGIN = gql`
  mutation Mutation($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

export default function LoginForm() {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, error }] = useMutation(LOGIN);

  const location = useLocation();
  let Redirection = null;

  if (location.pathname === "/cartStepTwo") {
    Redirection = <Navigate to="/cartStepThree" />;
  } else {
    Redirection = <Navigate to="/" />;
  }

  if (data) {
    console.log("data from query", data.login);
    localStorage.setItem("token", data.login);
    return Redirection;
  }

  if (error) {
    console.log("error", error);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: { email, password },
      });
      if (userContext) {
        userContext.setUser({
          id: response.data.id,
          admin: response.data.admin,
          phonenum: response.data.phonenum,
          gender: response.data.gender,
          email: response.data.email,
          lastName: response.data.lastName,
          firstName: response.data.firstName,
        });
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fields = [
    {
      type: "email",
      placeholder: "E-mail",
      onChange: (e: any) => setEmail(e.target.value),
    },
    {
      type: "password",
      placeholder: "Mot de passe",
      isPassword: true,
      onChange: (e: any) => setPassword(e.target.value),
    },
  ];

  return (
    <CustomForm
      onSubmit={handleSubmit}
      title="Connexion"
      fields={fields}
      buttonText="Se connecter"
    />
  );
}
