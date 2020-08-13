import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="item" id="app__videoList--videoComponent">
      <img src={video.snippet.thumbnails.medium.url} className="ui image"></img>
      <div className="content">
        <div className="header" id="app__videoList--videoTitle">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
