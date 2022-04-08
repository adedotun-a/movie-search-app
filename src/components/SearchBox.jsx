import React from "react";

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
    {/* <span className="input-group-text border-0" id="search-addon">
      <i className="fas fa-search"></i>
    </span> */}
  </div>
);

export default SearchBox;
