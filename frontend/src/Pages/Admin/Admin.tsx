import AdminAside from "../../Components/AdminAside/AdminAside";
import BikeList from "../../Components/BikeList/BikeList";
import UserList from "../../Components/UserList/UserList";

export default function Admin() {
  return (
    <section>
      <AdminAside />
      <UserList />
      <BikeList />
    </section>
  );
}
