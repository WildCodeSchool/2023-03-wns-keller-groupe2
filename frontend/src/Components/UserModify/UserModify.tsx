import { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_USER = gql`
  query GetUser($userId: Float!) {
    getUser(userId: $userId) {
      id
      admin
      phonenum
      gender
      password
      email
      lastName
      firstName
    }
  }
`;

const UPDATE_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $gender: String!
    $phonenum: String!
    $admin: Boolean!
    $userId: Float!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      gender: $gender
      phonenum: $phonenum
      admin: $admin
      userId: $userId
    )
  }
`;

export default function UserModify() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId },
    skip: !userId,
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const [newUser, setNewUser] = useState({
    id: null,
    admin: false,
    phonenum: "",
    gender: "",
    password: "",
    email: "",
    lastName: "",
    firstName: "",
  });

  useEffect(() => {
    if (data) {
      setNewUser(data.getUser);
    }
  }, [data]);

  const handleChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser({ variables: { ...newUser, userId } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <section>
      <h1>Modification de l'utilisateur</h1>
      <form>
        <label htmlFor="firstName">
          Prénom
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Nom
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gender">
          Genre
          <input
            type="text"
            id="gender"
            name="gender"
            value={newUser.gender}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Numéro de téléphone
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            value={newUser.phonenum}
            onChange={handleChange}
          />
        </label>
        <select
          name="admin"
          id="admin"
          value={newUser.admin.toString()}
          onChange={handleChange}
        >
          <option value="true">Admin</option>
          <option value="false">Utilisateur</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Modifier
        </button>
      </form>
    </section>
  );
}
