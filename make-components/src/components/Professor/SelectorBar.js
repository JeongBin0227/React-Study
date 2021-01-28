import React from "react";

const SelectorBar = ({ selector, filterSelector }) => {
  const onChangeSelect = (e) => {
    filterSelector(e.target.value);
  };

  return (
    <div className="custom-select">
      <select onChange={onChangeSelect}>
        {selector.map((sc, index) => (
          <option value={sc}>{sc}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorBar;
