import { useState } from "react";
import AdminAside from "../../Components/AdminAside/AdminAside";
import BikeList from "../../Components/BikeList/BikeList";
import UserList from "../../Components/UserList/UserList";
import AdminHome from "../../Components/AdminHome/AdminHome";
//import AddBikeForm from "../../Components/AddBikeForm/AddBikeForm";
import ShopPage from "../AdminShopPage/ShopPage";
import "./admin.scss";

export interface Navigate {
  navigate: String;
  setNavigate: (navigate: string) => void;
}

export default function Admin() {
  const [navigate, setNavigate] = useState<String>("bike");
  return (
    <section className="admin-section">
      <AdminAside setNavigate={setNavigate} />
      <main>
        {navigate === "home" ? <AdminHome /> : ""}
        {navigate === "users" ? <UserList /> : ""}
        {navigate === "shops" ? <ShopPage /> : ""}
        {navigate === "bikes" ? <BikeList /> : ""}
        {/* <AddBikeForm /> */}
      </main>
    </section>
  );
}
