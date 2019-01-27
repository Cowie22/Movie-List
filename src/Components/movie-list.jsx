import MovieListEntry from './Movie-List-Entry.js';

var MovieList = function(props) {
  var list = props.movies.map(movie => <MovieListEntry  movie={movie}/>)
  return (
    <div>
      {list}
    </div>
  )
}

export default MovieList

