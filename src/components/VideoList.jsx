import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return (
    <div className="ui relaxed divided list" id="app__videoList">
      {renderedList}
    </div>
  );
};

export default VideoList;
