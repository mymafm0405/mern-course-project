import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      name: "Mahmoud",
      placeCount: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
