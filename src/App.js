import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import youtube from "../src/api/youtube";
const KEY = "AIzaSyB_gW65eypRJYUUwwMa85vwY2dJOPQ84_E";

export default () => {
  const [term, setTerm] = useState("");
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    const onTermSubmit = async (term) => {
      const res = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 5,
          type: "video",
          key: KEY,
        },
      });
      console.log(res);
      //this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
      setvideos(res.data.items);
      console.log(res.data.items);
    };
    onTermSubmit();
  }, [term]);

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar setTermSubmit={setTerm} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail videoDetail={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList list={videos} onVideoSelected={setselectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};
