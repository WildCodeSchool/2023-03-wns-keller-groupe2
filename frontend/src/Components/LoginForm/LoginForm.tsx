import logo from "../../assets/userIcon.png";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import "./style.scss";
import { UserContext } from "../../services/context/userContext";

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

  if (data) {
    console.log("data from query", data.login);
    localStorage.setItem("token", data.login);
    return <Navigate to="/" />;
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

  return (
    <div className="login-form">
      <form
        className="login-form"
        onSubmit={async (e) => {
          e.preventDefault();
          login();
        }}>
        <h1 className="login-title">Déjà client</h1>
        <input
          placeholder="E-mail"
          type="email"
          className="input-login-form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          className="input-login-form"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="form-submit-button"
          type="submit"
          onClick={handleSubmit}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
