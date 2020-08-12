import React, { Component } from "react";
import "./css/main.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const data = {
  KEY: "AIzaSyDCiFgrbUjlPaADlWaBUR5bes48IeZdgDE",
};

class App extends Component {
  onTermSubmit = async (term) => {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: data.KEY,
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container app">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
