
const PersonForm = (props) => {
    const {newName,handleNameChange,newPhone,handlePhoneChange,addPerson} = props
    return (
        <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
    )
}

export default PersonForm