import MovieList from './movie-list.js';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <MovieList movies={props.movies}/>
      </div>
    )
  }
}

export default App