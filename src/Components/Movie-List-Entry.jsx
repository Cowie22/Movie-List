
class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnToggled: this.props.movie.watched,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick() {
    this.setState(state => ({
      btnToggled: !state.btnToggled
    }));
    this.props.movie.watched ? this.props.movie.watched = false : this.props.movie.watched = true;
  }
  render() {
    return (
      <div>
        <span className='movieListEntry'>{this.props.movie.title}
        <button className="watchBTN" onClick={this.handleBtnClick}>
        {this.state.btnToggled ? 'Not Watched' : 'Watched'}</button>
        </span>
      </div>
    )
  }
}

export default MovieListEntry