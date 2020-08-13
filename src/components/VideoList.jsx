import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });

  return (
    <div className="ui relaxed divided list" id="app__videoList">
      {renderedList}
    </div>
  );
};

export default VideoList;
