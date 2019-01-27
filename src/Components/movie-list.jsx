import MovieListEntry from './Movie-List-Entry.js';

var MovieList = function(props) {
  var list = props.movies.map((movie, i) => <MovieListEntry  key={i} movie={movie} />)
  return (
    <div>
      {list}
    </div>
  )
}

export default MovieList

