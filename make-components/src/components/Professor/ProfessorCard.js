import React from "react";

const ProfessorCard = ({ professor }) => {
  console.log(professor);
  return (
    <div className="professr_card">
      <span>{professor.name}</span>
      <span>{professor.position}</span>
    </div>
  );
};

export default ProfessorCard;
