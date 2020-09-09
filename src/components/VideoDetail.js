import React from "react";

export default ({ videoDetail }) => {
  if (!videoDetail) {
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player">Loading...</iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">Loading...</h4>
          <p></p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${videoDetail.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoDetail.snippet.title}</h4>
        <p>{videoDetail.snippet.description}</p>
      </div>
    </div>
  );
};
