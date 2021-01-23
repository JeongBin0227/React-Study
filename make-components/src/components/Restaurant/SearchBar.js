import React from "react";
import SVG from "../../../src/assets/search.svg";

const SearchBar = () => {
  return (
    <>
      <input type="text" placeholder="Search.."></input>
      <img src={SVG} class="search-icon" alt="search"></img>
    </>
  );
};

export default SearchBar;
