import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("Hello");
  const [debounceText, setDebounceText] = useState(text);
  useEffect(() => {
    const doTranslation = async () => {
      // const {data} = await axios.post(
      //   "https://translation.googleapis.com/language/translate/v2",
      //   {},
      //   {
      //     params: {
      //       q: debounceText,
      //       target: language.value,
      //       key: "GOOGLE_API_KEY"
      //     }
      //   }
      // );
      // setTranslated({data.data.translations[0].translatedText})
    };
    if (debounceText) {
      doTranslation();
    }
  }, [language, debounceText]);

  useEffect(() => {
    const timedId = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(timedId);
    };
  });
  return (
    <div>
      <h5 className="ui header">{translated}</h5>
    </div>
  );
};

export default Convert;
