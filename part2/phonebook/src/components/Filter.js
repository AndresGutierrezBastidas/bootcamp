
const Filter = (props) =>{
    const {newFilter,handleFilterChange} = props
    return(
        <form>
        <div>
          filter show with <input value={newFilter} onChange={handleFilterChange} />
        </div>
      </form>
    )
}

export default Filter