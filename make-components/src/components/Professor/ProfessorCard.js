import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: inline-block;
  border-radius: 10px;
  width: 100px;
  height: 150px;
  padding: 10px;
  border: 2px solid white;
`;

const ProfessorCard = ({ professor }) => {
  console.log(professor);
  return (
    <Card className="professr_card">
      <span>{professor.name}</span>
      <span>{professor.position}</span>
      <span>{professor.position}</span>
      <span>{professor.position}</span>
      <span>{professor.position}</span>
    </Card>
  );
};

export default ProfessorCard;
