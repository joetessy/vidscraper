import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) return <div></div>;
  let id = video.id.videoId;
  let url = `https://www.youtube.com/embed/${id}`;
  return(
    <div className='video-detail'>
      <div className='vid-container'>
        <iframe src={url}/>
      </div>
      <div className='detail-content'>
        <div className='video-detail-title'>
          <h2>{video.snippet.title}</h2>
          </div>
          <div className='video-detail-desc'>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
