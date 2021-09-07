import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
/*componentDidMount() in classes are equivalent to useEffect() lifecycle method */

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            {/*(video)=>setSelectedVideo(video) is equivalent to setSelectedVideo */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//AIzaSyCAxrz3xjwSf4T7wYRH_ew-z0-ZrlsZqHc
