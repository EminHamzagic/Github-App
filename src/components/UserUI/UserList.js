import axios from "axios";
import { useEffect, useReducer } from "react";
import UserReducerFunction from "../../Reducers/UserReducer";
import "../../CSS/User.css";
import UserBox from "./UserBox";

export default function UserList({ userName, refresh }) {
  const [userList, dispatch] = useReducer(UserReducerFunction, []);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${userName}`)
      .then((data) => dispatch({ type: "setUsers", value: data.data.items }))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="userListContainer">
      {userList.map((user) => {
        return (
          <UserBox
            key={user.id}
            url={user.url}
            id={user.id}
            reposUrl={user.repos_url}
          />
        );
      })}
    </div>
  );
}
