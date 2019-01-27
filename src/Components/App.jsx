import MovieList from './Movie-List.js';
import movies from '../Data/MovieListExampleData.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: movies
    }
  }
  render() {
    const { movieList } = this.state
    return (
      <div>
        <MovieList movies={movieList}/>
      </div>
    )
  }
}

export default App