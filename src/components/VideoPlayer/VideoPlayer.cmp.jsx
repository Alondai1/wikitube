import React from "react";
import "./VideoPlayer.style.scss";
const VideoPlayer = ({ videoId }) => {
    return (
        <div className="video-player">
        <iframe
            title="videoPlayer"
            width="450"
            height="250"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0">
        </iframe>
        </div>
    );
};

export default VideoPlayer;
