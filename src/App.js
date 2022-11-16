import { useState } from "react";
import RepoList from "./components/ReposUI/RepoList";
import SearchBtn from "./components/SearchBtn";
import UserList from "./components/UserUI/UserList";
import RepoContext from "./Contexts/RepoContext";

function App() {
  const [user, setUser] = useState("EminHamzagic");
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [reposUrl, setReposUrl] = useState("");
  const [activeUserRepos, setActiveUserRepos] = useState("");

  return (
    <RepoContext.Provider
      value={{ reposUrl, setReposUrl, activeUserRepos, setActiveUserRepos }}
    >
      <div style={{ all: "inherit" }}>
        <SearchBtn handleChange={setUser} handleRefresh={setRefreshUsers} />
        <UserList userName={user} refresh={refreshUsers} />
        <RepoList />
      </div>
    </RepoContext.Provider>
  );
}

export default App;
