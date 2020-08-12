import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar ui segment" id="app__searchBar">
      <form className="ui form">
        <div className="field">
          <label id="app__searchBar--title">SEARCH FOR A VIDEO</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
