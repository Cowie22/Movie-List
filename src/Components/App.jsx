import MovieList from './Movie-List.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import userData from '../Data/UserData.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: userData,
      search: '',
      add: '',
      watched: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGoButton = this.handleGoButton.bind(this);
    this.filterList = this.filterList.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.filterWatched = this.filterWatched.bind(this);
    this.handleFilterWatch = this.handleFilterWatch.bind(this);
    this.handleFilterNotWatched = this.handleFilterNotWatched.bind(this);
    this.currentState = this.state.movieList;
  }
  // State handling functions for input fields
  addMovieHandler(event) {
    this.setState({add: event.target.value});
  }
  handleSearch(event) {
    this.setState({search: event.target.value});
  }
  // Button handling functions
  handleAddButton(event) {
    event.preventDefault();
    this.addList(this.state.add);
  }
  handleGoButton(event) {
    event.preventDefault();
    this.filterList(this.state.search);
  }
  // Data functions (filter, etc.)
  addList(event) {
    if (event.length > 0) {
      userData.push({title: event, watched: this.state.watched});
    }
    this.setState({movieList: userData});
  }
  filterList(event) {
    let searchValue = this.state.search;
    var noDisplay = [{title: 'NO MOVIE FOUND'}];
    var filterMovie = this.currentState.filter((movie, i) => {
      console.log(movie)
      return movie.title.includes(searchValue);
    })
    if (event.length > 0) {
      if (filterMovie.length === 0) {
        this.setState({movieList: noDisplay});
      } else {
        this.setState({movieList: filterMovie});
      }
    } else {
      this.setState({movieList: userData});
    }
  }
  filterWatched(event) {
    var filterWatch = userData.filter((movie, i) => {
       return movie.watched === true;
    })
    this.setState({movieList: filterWatch})
  }
  handleFilterWatch(event) {
    event.preventDefault();
    this.filterWatched(this.state.watched)
  }
  handleFilterNotWatched(event) {
    event.preventDefault();
    this.filterWatched(!this.state.watched)
  }
  render() {
    const { movieList, search, add } = this.state;
    return (
      <div>
        <h1 className='title'>MOVIE LIST</h1>
        <AddMovie addValue={add} onAdd={this.addMovieHandler} onClick={this.handleAddButton} />
        <Search value={search} onChange={this.handleSearch}
        onClick={this.handleGoButton}
        onWatched={this.handleFilterWatch} 
        onNotWatched={this.handleFilterNotWatched} />
        <MovieList movies={movieList} />
      </div>
    );
  }
}


export default App