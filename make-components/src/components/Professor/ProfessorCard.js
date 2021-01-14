import React from "react";
import styled from "styled-components";
import SVG from "../../../src/assets/emailPlus.svg";

const Card = styled.div`
  display: inline-block;
  border-radius: 10px;
  height: 150px;
  padding: 10px;
  border: 2px solid white;
`;

const ProfessorCard = ({ professor }) => {
  console.log(professor);
  return (
    <Card className="professor_card">
      <div className="professor">
        <div className="professor-header">
          <span className="professor-name">{professor.name}</span>
          <span className="professor-position">{professor.position}</span>
          <a href={professor.url}>
            <img src={SVG} class="search-icon" alt="search"></img>
          </a>
        </div>
        <div className="professor-school">{professor.school}</div>
        <div className="professor-position">{professor.department}</div>
        <div className="professor-position">{professor.email}</div>
      </div>
    </Card>
  );
};

export default ProfessorCard;
