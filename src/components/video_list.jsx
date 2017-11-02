import React from 'react';
import VideoItem from './video_item';

const VideoList = ({videos, onVideoSelect}) => {
  let videoItems = videos.map((video, id) => {
    return <VideoItem key={id} onVideoSelect={onVideoSelect} video={video}/>;
  });
  return <ul className='video-list'>{videoItems}</ul>;
};

export default VideoList;
