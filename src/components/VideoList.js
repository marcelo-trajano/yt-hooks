import React from "react";
import VideoCard from "./VideoCard";

export default ({ list, onVideoSelected }) => {
  const videos = list.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });

  return <div className="ui relaxed divided list">{videos}</div>;
};
