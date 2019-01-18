class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleQueryInput = this.handleQueryInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleQueryInput(e) {
    let { value } = e.target;
    this.setState({ query: value });
  } 

  search() {
    let { searchYouTube, updateVideo, updateList } = this.props;
    let { query } = this.state;
    let options = {
      query: query
    }
    searchYouTube(options, (data) => updateVideo(data.items[0]));
    searchYouTube(options, (data) => updateList(data.items));
  }

  

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.handleQueryInput} className="form-control" type="text" />
        <button onClick={() => this.search()} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
}


export default Search;
