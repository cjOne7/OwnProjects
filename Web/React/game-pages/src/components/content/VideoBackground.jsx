import React from 'react';

const VideoBackground = ({genre}) => {
    return (
        <div className="video-container">
            <video autoPlay muted loop
                   src={require(`../../assets/background_videos/${genre}_bg_video.mp4`)}/>
        </div>
    );
};

export default VideoBackground;