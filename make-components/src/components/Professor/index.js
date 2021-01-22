import React, {useState} from "react";
import professors from "../../data/professor";
import ProfessorCard from "./ProfessorCard";
import SelectorBar from "./SelectorBar";
import SearchBar from "./SearchBar";

const Index = () => {
  // console.log(professors);
  // const [schoolSelector, setSchoolSelector] = useState([]);
  // const [departmentSelector, setDepartmentSelector] = useState(['데이터 베이스 시스템']);

  const professorSchool = professors.map(professor => professor.school)
  const professorDepartment = professors.map(professor => professor.department)

  // setUsers([...users, user]);

  // setSchoolSelector([...new Set(professorSchool)])
  // setDepartmentSelector([...new Set(professorDepartment)])
  // setDepartmentSelector('데이터 베이스 시스템')
  return (
    <div>
      <div className="searchBar">
        <SearchBar></SearchBar>
      </div>
      <div className="selectBar">
        <SelectorBar selector={[...new Set(professorSchool)]}></SelectorBar>
        <SelectorBar selector={[...new Set(professorDepartment)]}></SelectorBar>
      </div>
      <div className="professInfo">
        {professors.map((professor) => (
          <ProfessorCard professor={professor}></ProfessorCard>
        ))}
      </div>
    </div>
  );
};

export default Index;
