import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw0Hqm9wIrJG8Z2pEp_rqL6_&ust=1664527147267000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjE-P7MufoCFQAAAAAdAAAAABAN",
      name: "Mahmoud",
      placeCount: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
