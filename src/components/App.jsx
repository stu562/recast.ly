
// var App = () => (
  //   <div>
  //     <nav className="navbar">
  //       <div className="col-md-6 offset-md-3">
  //         <div><h5><em>search</em> view goes here</h5></div>
  //       </div>
  //     </nav>
  //     <div className="row">
  //       <div className="col-md-7">
  //         <div><h5><em>videoPlayer</em> view goes here</h5></div>
  //       </div>
  //       <div className="col-md-5">
  //         <div><h5><em>videoList</em> view goes here</h5></div>
  //       </div>
  //     </div>
  //   </div>
  // );
  
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
  }

  handleQueryInput(e) {
    //updates and changes the constructors state
    let query = e.target.value;
    this.setState({ query }); 
  } 

  render() {
    //console.log(this.props.data)
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
            <div><VideoList videos={this.props.data}/></div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
