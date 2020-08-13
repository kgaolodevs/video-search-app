import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item"
      id="app__videoList--videoComponent"
      onClick={() => onVideoSelect(video)}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title}
      ></img>
      <div className="content">
        <div className="header" id="app__videoList--videoTitle">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
