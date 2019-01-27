import MovieList from './Movie-List.js';
import movies from '../Data/MovieListExampleData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: movies,
      search: 'search'
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event) {
    this.setState({search: event.target.value});
  }
  render() {
    const { movieList, search } = this.state;
    return (
      <div>
        <h1 className='title'>MOVIE LIST</h1>
        <Search value={search} onChange={this.handleSearch} />
        <MovieList movies={movieList} />
      </div>
    );
  }
}

export default App