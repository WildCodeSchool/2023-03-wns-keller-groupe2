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

  if (id == null) {
    return <p>Erreur</p>;
  }

  const userId = parseFloat(id);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId },
    skip: !userId,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [newUser, setNewUser] = useState({
    id: "",
    admin: false,
    phonenum: "",
    gender: "",
    password: "",
    email: "",
    lastName: "",
    firstName: "",
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (data && data.getUser) {
      setNewUser({
        id: data.getUser.id,
        admin: data.getUser.admin,
        phonenum: data.getUser.phonenum,
        gender: data.getUser.gender,
        password: data.getUser.password,
        email: data.getUser.email,
        lastName: data.getUser.lastName,
        firstName: data.getUser.firstName,
      });
    }
  }, [data]);

  const handleChange = (e: any) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [updateUser] = useMutation(UPDATE_USER);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newUser.id == null) {
      alert("Shop id is null");
      return;
    } else {
      const updateUserId = parseInt(newUser.id);
      const phonenum = parseInt(newUser.phonenum);
      const { admin, gender, password, email, lastName, firstName } = newUser;
      const response = updateUser({
        variables: {
          admin,
          phonenum,
          gender,
          password,
          email,
          lastName,
          firstName,
          updateUserId,
        },
      });
      console.log(response);
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

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
            value={data.getUser.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Nom
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.getUser.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={data.getUser.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gender">
          Genre
          <input
            type="text"
            id="gender"
            name="gender"
            value={data.getUser.gender}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Numéro de téléphone
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            value={data.getUser.phonenum}
            onChange={handleChange}
          />
        </label>
        <select
          name="admin"
          id="admin"
          value={data.getUser.admin}
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
