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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showSearchList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdownToggle = () => {
  //const [selectedOption, setSelectedOption] = useState(dropdownOptions[0]);
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        values={dropdownOptions}
      />
    );
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div className="App">
      {showAccordion()}
      {showSearchList()}
      {showDropdownToggle()}
      {showTranslate()}
    </div>
  );
};
