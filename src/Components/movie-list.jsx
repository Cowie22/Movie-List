import Movies from '../Data/MovieListExampleData.js'

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    var list = this.props.Movies.map(movie => {<span>{movie.title}</span>})
    return (
      <div>
        movies={list}
      </div>
    )
  }
}

export default MovieList

