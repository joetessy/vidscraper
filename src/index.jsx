import React, { Component } from 'react';
import SearchBar from './components/search';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import ReactDOM from 'react-dom';
import _ from 'lodash';

const API_KEY = 'AIzaSyBOnguPCeBpkwYB382Wa6Gpoz8n30KkFzc';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [], selectedVideo: null};
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render(){
    const videoSearch = _.debounce((term) => this.videoSearch(term), 300);
    return (
      <div className='app'>
        <SearchBar onSeachTermChange={videoSearch}/>
        <main>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </main>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.querySelector('#root'));
});
