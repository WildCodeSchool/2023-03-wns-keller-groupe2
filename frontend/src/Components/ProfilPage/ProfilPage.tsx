import CustomForm from "../CustomForm/CustomForm";
import { useState, useContext } from "react";
import { UserContext } from "../../services/context/userContext";
import { useNavigate } from "react-router-dom";

export default function ProfilPage() {
  const userContext = useContext(UserContext);

  const user = userContext ? userContext.user : null;

  const [email, setEmail] = useState(user ? user.email : "");
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [phoneNum, setPhoneNum] = useState(user ? user.phonenum : "");
  const [gender, setGender] = useState(user ? user.gender : "");
  console.log(email);
  console.log(firstName);
  console.log(lastName);
  console.log(phoneNum);
  console.log(gender);

  const fields = [
    {
      type: "textarea",
      placeholder: "Prénom",
      value: firstName,
      onChange: (e: any) => setFirstName(e.target.value),
    },
    {
      type: "textarea",
      placeholder: "Nom",
      value: lastName,
      onChange: (e: any) => setLastName(e.target.value),
    },
    {
      type: "textarea",
      placeholder: "Téléphone",
      value: phoneNum,
      onChange: (e: any) => setPhoneNum(e.target.value),
    },
    {
      type: "textarea",
      placeholder: "Genre",
      value: gender,
      onChange: (e: any) => setGender(e.target.value),
    },
    {
      type: "textarea",
      placeholder: "E-mail",
      value: email,
      onChange: (e: any) => setEmail(e.target.value),
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const navigate = useNavigate();

  return (
    <CustomForm
      onSubmit={handleLogout}
      title="Profil"
      fields={fields}
      buttonText="Déconnnexion"
    />
  );
}
