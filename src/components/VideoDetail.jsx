import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div id="app__videoDetail">
      <div className="ui embed">
        <iframe src={videoSource} title="video player" />
      </div>
      <div className="ui segment">
        <h1 className="ui header">{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
