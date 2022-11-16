import { useState } from "react";
import "../CSS/Search.css";

export default function SearchBtn({ handleChange, handleRefresh }) {
  const [userStr, setUserStr] = useState("");
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleChange(userStr);
      handleRefresh((prev) => !prev);
    }
  };

  return (
    <div className="searchContainer">
      <input
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setUserStr(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleChange(userStr);
          handleRefresh((prev) => !prev);
        }}
      >
        Search
      </button>
    </div>
  );
}
