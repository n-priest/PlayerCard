import React from 'react';
import ReactPlayer from "react-player";

function VideoPlayer() {
    return (
        <div className="App">

            <ReactPlayer width="300px"
                url="https://www.youtube.com/watch?v=YlkLAuL_I0o"
            />
        </div>
    );
}

export default VideoPlayer;