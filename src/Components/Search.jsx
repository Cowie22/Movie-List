
var Search = function(props) {
  return (
    <form>
      <label>
        <input type='text' placeholder="Search..." onChange={props.onChange} />
      </label>
      <input type='submit' value='GO!' onClick={props.onClick}/>
    </form>
  )
}

export default Search