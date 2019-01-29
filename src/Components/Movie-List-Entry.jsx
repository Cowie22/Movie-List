// var MovieListEntry = function(props) {
//   return (
//     <div>
//       <span className='movieListEntry'>{props.movie.title}</span>
//       <button>Watched</button>
//     </div>
//   )
// }

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnToggled: true
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }
  handleBtnClick() {
    this.setState(state => ({
      btnToggled: !state.btnToggled
    }));
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