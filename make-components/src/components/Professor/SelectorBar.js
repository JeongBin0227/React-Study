import React from "react";

const SelectorBar = ({ selector }) => {
  return (
    <div className="custom-select">
      <select>
        {selector.map((sc, index) => (
          <option value={index}>{sc}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorBar;
