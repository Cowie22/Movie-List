import MovieList from './Movie-List.js';
import movies from '../Data/MovieListExampleData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: movies,
      search: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGoButton = this.handleGoButton.bind(this);
    this.filterList = this.filterList.bind(this);
    this.currentState = this.state.movieList;
  }
  handleSearch(event) {
    this.setState({search: event.target.value});
  }
  handleGoButton(event) {
    event.preventDefault();
    this.filterList(this.state.search);
  }
  filterList(event) {
    let searchValue = this.state.search;
    var noDisplay = [{title: 'NO MOVIE FOUND'}];
    var filterMovie = this.currentState.filter((movie, i) => {
      return movie.title === searchValue;
    })
    if (event.length > 0) {
      if (filterMovie.length === 0) {
        this.setState({movieList: noDisplay});
      } else {
        this.setState({movieList: filterMovie});
      }
    } else {
      this.setState({movieList: movies});
    }
  }
  render() {
    const { movieList, search } = this.state;
    return (
      <div>
        <h1 className='title'>MOVIE LIST</h1>
        <Search value={search} onChange={this.handleSearch} onClick={this.handleGoButton} />
        <MovieList movies={movieList} />
      </div>
    );
  }
}

// var filterList = props.movies.filter((movie, i) => {
//   if (movie.title === props.value) {
//     return movie;
//   };
// })

export default App