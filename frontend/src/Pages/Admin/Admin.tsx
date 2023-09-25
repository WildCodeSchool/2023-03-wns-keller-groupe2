import BikeList from "../../Components/BikeList/BikeList";
import UserList from "../../Components/UserList/UserList";

export default function Admin() {
  return (
    <>
      <h1>Admin Dashboard</h1>
      <UserList />
      <BikeList />
    </>
  );
}
