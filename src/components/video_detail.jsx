import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) return <div>Loading...</div>;
  let id = video.id.videoId;
  let url = `https://www.youtube.com/embed/${id}`;
  return(
    <div className='video-detail'>
      <iframe src={url}/>
    </div>
  );
};

export default VideoDetail;
