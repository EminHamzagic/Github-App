import axios from "axios";
import { useContext, useEffect, useState } from "react";
import RepoContext from "../../Contexts/RepoContext";
import "../../CSS/Repos.css";
import Repo from "./Repo";

export default function RepoList() {
  const { reposUrl } = useContext(RepoContext);
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    axios
      .get(reposUrl)
      .then((res) => {
        setReposList(res.data);
      })
      .catch((err) => console.log(err));
  }, [reposUrl]);
  return (
    <div className="repoListContainer">
      {reposUrl === "" ? (
        <p>Click on a user to get list of repositories</p>
      ) : (
        [...reposList].map((repo, i) => {
          return <Repo data={repo} key={repo.id} />;
        })
      )}
    </div>
  );
}
