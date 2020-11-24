import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("Tarantino");
  const [debouncedTerm, setDebouncesterm] = useState(searchTerm);
  const [searchResults, setResults] = useState([]);

  useEffect(() => {
    const waitTimeId = setTimeout(() => {
      if (searchTerm) {
        setDebouncesterm(searchTerm);
      }
    }, 500);

    return () => {
      clearTimeout(waitTimeId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const searchApi = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    };
    searchApi();
  }, [debouncedTerm]);

  const renderedResults = searchResults.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go Ahead
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
