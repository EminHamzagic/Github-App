import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RepoContext from "../../Contexts/RepoContext";
import "../../CSS/User.css";

export default function UserBox({ url, reposUrl, id }) {
  const [userData, setUserData] = useState({ login: "", bio: "" });
  const { setReposUrl, activeUserRepos, setActiveUserRepos } =
    useContext(RepoContext);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: "Basic" + btoa("EminHamzagic" + ":" + "Emindemir1"),
        },
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className="userBox"
      onClick={() => {
        setReposUrl(reposUrl);
        setActiveUserRepos(id);
      }}
      style={{
        backgroundColor:
          activeUserRepos == id ? "rgb(78, 78, 78)" : "rgb(58, 58, 58)",
      }}
    >
      <img src={userData.avatar_url} />
      <div className="userBoxText">
        <h1>{userData.login}</h1>
        <p>{userData.bio}</p>
      </div>
    </div>
  );
}
