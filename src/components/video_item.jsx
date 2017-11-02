import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  console.log(video);
  return (
    <li
      onClick={() => onVideoSelect(video)} 
      className='video-list-item'>
      <img src={video.snippet.thumbnails.default.url}/>
      <div className='item-content'>
        <div className='title'>{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoItem;
