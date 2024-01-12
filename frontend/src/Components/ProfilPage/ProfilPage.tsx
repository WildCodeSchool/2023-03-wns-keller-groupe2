import CustomForm from "../CustomForm/CustomForm";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../services/context/userContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      phonenum
      password
      lastName
      gender
      firstName
      email
    }
  }
`;

export default function ProfilPage() {
  //get user informations
  const userContext = useContext(UserContext);

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: userContext?.user?.id },
  });

  const user = data?.user;

  // Initialize state with empty strings
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [gender, setGender] = useState("");

  //update state when data changes
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhoneNum(user.phonenum);
      setGender(user.gender);
    }
  }, [user]);

  //use navigate to redirect
  const navigate = useNavigate();

  //if user not connected
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  //if user not found
  if (!userContext?.user?.id) {
    return <p>User not found</p>;
  }

  //array of fields for the form
  const fields = [
    {
      type: "textarea",
      label: "Prénom",
      value: firstName,
      onChange: (e: any) => setFirstName(e.target.value),
    },
    {
      type: "textarea",
      label: "Nom",
      value: lastName,
      onChange: (e: any) => setLastName(e.target.value),
    },
    {
      type: "textarea",
      label: "Téléphone",
      value: phoneNum,
      onChange: (e: any) => setPhoneNum(e.target.value),
    },
    {
      type: "textarea",
      label: "Genre",
      value: gender,
      onChange: (e: any) => setGender(e.target.value),
    },
    {
      type: "textarea",
      label: "E-mail",
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
    },
  ];

  //fonction of deconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //fonction of modify informations of user
  const handleModify = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Coming soon",
      text: "Cette fonctionnalité sera bientôt disponible",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      <CustomForm
        onSubmit={handleLogout}
        secondOnSubmit={handleModify}
        title="Profil"
        fields={fields}
        buttonText="Deconnexion"
        secondButtonText="Modifier"
        buttonType="button"
      />
    </div>
  );
}
