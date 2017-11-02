import React, { Component } from 'react';
import SearchBar from './components/search';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBOnguPCeBpkwYB382Wa6Gpoz8n30KkFzc';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [], selectedVideo: null};
    this.videoSearch('balls');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render(){
    return (
      <div className='app'>
        <h1>VidScrape</h1>
        <SearchBar onSeachTermChange={(term) => this.videoSearch(term).bind(this)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.querySelector('#root'));
});
