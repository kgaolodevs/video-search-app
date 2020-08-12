import React, { Component } from "react";
import "./css/main.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="ui container app">
        <SearchBar />
      </div>
    );
  }
}

export default App;
