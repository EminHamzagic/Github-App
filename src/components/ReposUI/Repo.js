import { faCodeFork, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Repo({ data }) {
  return (
    <div className="repoBox">
      <div className="Info">
        <a href={data.html_url} target="_blank">
          {data.name}
        </a>
        <p className="repoDesc">{data.description}</p>
        <p>Created at {data.created_at}</p>
      </div>
      <div className="moreInfo">
        <p>License: {data.license ? data.license.name : "none"}</p>
        <div className="iconsDiv">
          <div>
            <FontAwesomeIcon icon={faStar} className="icon" />
            <p>{data.stargazers_count}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} className="icon" />
            <p>{data.watchers_count}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCodeFork} className="icon" />
            <p>{data.forks_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
