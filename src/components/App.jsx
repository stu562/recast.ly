import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: this.props.data[0],
      list: this.props.data
    }
    this.updateVideo = this.updateVideo.bind(this);
    this.handleClickVideo = this.handleClickVideo.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  handleClickVideo(video) {
    this.setState({ currentVideo: video });
  }

  updateVideo(video) {
    this.setState({ currentVideo: video })
  }

  updateList(videos) {
    this.setState({ list: videos })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchYouTube={searchYouTube} updateVideo={this.updateVideo} updateList={this.updateList} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleClickVideo={this.handleClickVideo} videos={this.state.list}/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
