import React, { Component } from "react";
import "./css/main.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const data = {
  KEY: "AIzaSyC9t-cOsc42wy6nTv7zOAtPnTE_Av2IAVA",
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
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
