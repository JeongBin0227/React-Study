import React, { useState } from "react";
import professors from "../../data/professor";
import ProfessorCard from "./ProfessorCard";
import SelectorBar from "./SelectorBar";
import SearchBar from "./SearchBar";

const Index = () => {
  const [professorCard, setProfessorCard] = useState(professors);
  const professorSchool = professors.map((professor) => professor.school);
  const professorDepartment = professors.map(
    (professor) => professor.department
  );
  const changeProfessorSchool = (school) => {
    setProfessorCard(
      professors.filter((professor) => professor.school === school)
    );
  };

  const changeProfessorDepartment = (department) => {
    setProfessorCard(
      professors.filter((professor) => professor.department === department)
    );
  };

  return (
    <div>
      <div className="searchBar">
        <SearchBar changeProfessorSchool={changeProfessorSchool}></SearchBar>
      </div>
      <div className="selectBar">
        {/* <SelectorBar selector={[...new Set(professorSchool)]}></SelectorBar> */}
        {/* <SelectorBar selector={[...new Set(professorDepartment)]}></SelectorBar> */}
        <SelectorBar
          selector={[...new Set(professorSchool)]}
          filterSelector={changeProfessorSchool}
        ></SelectorBar>
        <SelectorBar
          selector={[...new Set(professorDepartment)]}
          filterSelector={changeProfessorDepartment}
        ></SelectorBar>
      </div>
      <div className="professInfo">
        {professorCard.map((professor) => (
          <ProfessorCard professor={professor}></ProfessorCard>
        ))}
      </div>
    </div>
  );
};

export default Index;
