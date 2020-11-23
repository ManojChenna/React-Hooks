import React, { useState } from "react";

export default ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const renderedItems = items.map((item, index) => {
    const onQuestionClick = (index) => {
      setSelectedIndex(index);
    };
    const active = index === selectedIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => onQuestionClick(index)}
          className={`title ${active}`}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};
