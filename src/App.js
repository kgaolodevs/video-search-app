import React, { Component } from "react";
import "./css/main.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const data = {
  KEY: "AIzaSyDCiFgrbUjlPaADlWaBUR5bes48IeZdgDE",
};

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResult: 5,
          key: data.KEY,
          q: term,
        },
      }
    );

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container app">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* Videos found: {this.state.videos.length} */}
      </div>
    );
  }
}

export default App;
