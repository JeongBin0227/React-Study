import React from "react";
import professors from "../../data/professor";
import ProfessorCard from "./ProfessorCard";
import SelectorBar from "./SelectorBar";
import SearchBar from "./SearchBar";

const index = () => {
  console.log(professors);
  const selector = [1, 2, 3, 4];
  return (
    <div>
      <div className="searchBar">
        <SearchBar></SearchBar>
      </div>
      <div className="selectBar">
        <SelectorBar selector={selector}></SelectorBar>
      </div>
      <div className="professInfo">
        {professors.map((professor) => (
          <ProfessorCard professor={professor}></ProfessorCard>
        ))}
      </div>
    </div>
  );
};

export default index;
