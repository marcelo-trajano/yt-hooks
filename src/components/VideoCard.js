import React from "react";
import "./VideoItem.css";

export default ({ video, onVideoSelected }) => {
  return (
    <div
      onClick={() => {
        onVideoSelected(video);
      }}
      className="video-item item"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
