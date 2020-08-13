import React, { Component } from "react";
import "./css/main.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const data = {
  KEY: "AIzaSyC9t-cOsc42wy6nTv7zOAtPnTE_Av2IAVA",
};

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("music");
  }

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

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container app">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
