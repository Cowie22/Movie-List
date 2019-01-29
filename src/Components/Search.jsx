
var Search = function(props) {
  return (
    <form>
      <input type='submit' value='Watched' onClick={props.onWatched}/>
      <input type='submit' value='Not-Watched' onClick={props.onNotWatched}/>
      <label>
        <input type='text' placeholder="Search..." onChange={props.onChange} />
      </label>
      <input type='submit' value='GO!' onClick={props.onClick}/>
    </form>
  )
}

export default Search