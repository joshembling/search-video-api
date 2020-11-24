import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('welsh football');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  // render() {
  //   return (
  //     <div className='ui container wrap'>
  //       <SearchBar onFormSubmit={this.onTermSubmit} />
  //       <div className='ui grid'>
  //         <div className='ui row'>
  //           <div className='eleven wide column'>
  //             <VideoDetail video={this.state.selectedVideo} />
  //           </div>
  //           <div className='five wide column'>
  //             <VideoList
  //               onVideoSelect={this.onVideoSelect}
  //               videos={this.state.videos}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className='ui container wrap'>
        <div className='icon'>
          <a href='http://youtube.com' target='_blank' rel='noreferrer'>
            <i class='fab fa-youtube fa-6x'></i>
          </a>
        </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='grid-container'>
          <div className='grid-item-1'>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='grid-item-2'>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
