import React, { useState } from "react";

export default ({ setTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            className="field"
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
