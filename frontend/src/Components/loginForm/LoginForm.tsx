import logo from "../../assets/userIcon.png";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import "./style.scss";

const LOGIN = gql`
  query Query($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, error }] = useLazyQuery(LOGIN);

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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="loginForm">
      <div className="logHeader">
        <img className="usersLogo" src={logo} alt="users_icon" />
        <h1>Déjà client</h1>
      </div>
      <form
        className="logForm"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log("email", email);
          console.log("password", password);
          login();
        }}>
        <label className="labelForm" htmlFor="mail">
          Email:
          <input
            className="inputLoginForm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="labelForm" htmlFor="password">
          Mot de passe:
          <input
            className="inputLoginForm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="formSubmitButton"
          type="submit"
          onClick={handleSubmit}>
          Se connecter
        </button>
      </form>
    </div>
  );
}
