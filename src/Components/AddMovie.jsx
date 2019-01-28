var AddMovie = function(props) {
  return (
    <form>
      <label>
        <input type='text' placeholder="Add movie title here" onChange={props.onAdd} />
      </label>
      <input type='submit' value='Add' onClick={props.onClick}/>
    </form>
  )
}

export default AddMovie