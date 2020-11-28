import React, { useState } from "react";

const Dropdown = ({ values, selectedOption, setSelectedOption }) => {
  const [open, setOpen] = useState(false);
  const renderedValues = values.map((val) => {
    if (selectedOption.value === val.value) {
      return null;
    }
    return (
      <div
        key={val.value}
        onClick={() => setSelectedOption(val)}
        className="item"
      >
        {val.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a label</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedValues}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
