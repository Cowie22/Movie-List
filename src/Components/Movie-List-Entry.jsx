var MovieListEntry = function(props) {
  return (
    <div>
      <span className='movieListEntry'>{props.movie.title}</span>
    </div>
  )
}

export default MovieListEntry