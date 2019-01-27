var Search = function(props) {
  return (
    <form>
      <label>
        SEARCH:
        <input type='text' placeholder="Search..." onChange={props.onChange} />
      </label>
      <input type='submit' value='GO!' />
    </form>
  )
}

export default Search