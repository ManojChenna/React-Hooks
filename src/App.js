import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";

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
  return (
    <div className="App">
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          values={dropdownOptions}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
