import User from "./UserItem";
import './UsersList.css'

const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2>No users found!</h2>;
  }

  return (
    <ul>
      {props.items.map((user) => (
        <User
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.placeCount}
        />
      ))}
    </ul>
  );
};

export default UsersList;
