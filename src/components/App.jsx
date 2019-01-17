import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      currentVideo: this.props.data[0]
    }
    this.handleQueryInput = this.handleQueryInput.bind(this);
    this.handleClickVideo = this.handleClickVideo.bind(this);
  }

  handleQueryInput(e) {
    //updates and changes the constructors state
    this.setState({ query: e.target.value }); 
  } 

  handleClickVideo(video) {
    this.setState({ currentVideo: video });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.state.query}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleClickVideo={this.handleClickVideo} videos={this.props.data}/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
