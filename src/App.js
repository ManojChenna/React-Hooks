import React from "react";
import Accordion from "./Components/Accordion";

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
export default () => {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
};
