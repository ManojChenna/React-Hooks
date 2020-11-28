import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const translateValues = [
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  }
];
const Translate = () => {
  const [language, setLanguage] = useState(translateValues[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </div>
      </div>
      <Dropdown
        values={translateValues}
        selectedOption={language}
        setSelectedOption={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>
    </div>
  );
};

export default Translate;
