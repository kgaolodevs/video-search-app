import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchTerm: "" };

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment" id="app__searchBar">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label id="app__searchBar--title">SEARCH FOR A VIDEO</label>
            <div id="app__searchBar--content">
              <input
                type="text"
                value={this.state.searchTerm}
                onChange={this.onInputChange}
              />
              <button className="ui violet button ">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
