import React from "react";
import "./Search.css";
import { BiSearchAlt } from "react-icons/bi";

function Search(props) {
  const handleSearchChange = (event) => {
    props.setLocalValue(event.target.value);
  };

  const doSearchEnter = (event) => {
    if (event.key === "Enter") {
      props.setInputSearch(props.localValue);
    }
  };

  const doSearch = () => {
    props.setInputSearch(props.localValue);
  };

  return (
    <>
      <div className="header-right">
        <input
          type="search"
          id="search-bar"
          value={props.localValue}
          onChange={handleSearchChange}
          onKeyDown={doSearchEnter}
          placeholder="Search movies"
        />

        <button id="search-button" onClick={doSearch}>
          <BiSearchAlt size={22} />
        </button>
      </div>
    </>
  );
}

export default Search;
