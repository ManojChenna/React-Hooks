import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";

const items = [
  {
    title: "Question 1?",
    content: "Answer 1."
  },
  {
    title: "Question 2?",
    content: "Answer 2."
  },
  {
    title: "Question 3?",
    content: "Answer 3."
  }
];
const dropdownOptions = [
  {
    label: "label 1",
    value: "value 1"
  },
  {
    label: "label 2",
    value: "value 2"
  },
  {
    label: "label 3",
    value: "value 3"
  }
];
export default () => {
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="App">
      {/*       <Accordion items={items} />
       
      <Search />
      
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          values={dropdownOptions}
        />
      ) : null}
      */}
      <Translate />
    </div>
  );
};
