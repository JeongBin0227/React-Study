import React, { useState } from "react";
import SVG from "../../../src/assets/search.svg";

const SearchBar = ({ filterSelector }) => {
  const [professorInput, setProfessorInput] = useState("");

  const handleInput = (e) => {
    setProfessorInput(e.target.value);
    console.log(e.target.value);
  };

  const enterkey = (e) => {
    if (window.event.keyCode == 13) {
      filterSelector(e.target.value);
    }
  };

  return (
    <>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Search.."
        value={professorInput}
        onKeyUp={enterkey}
      ></input>
      <img src={SVG} class="search-icon" alt="search"></img>
    </>
  );
};

export default SearchBar;
