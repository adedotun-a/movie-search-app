import React from "react";

// A search box that gets user input and updates a value
const SearchBox = (props) => (
  <div className="input-group rounded search-bar">
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search"
      value={props.value}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
    />
  </div>
);

export default SearchBox;
