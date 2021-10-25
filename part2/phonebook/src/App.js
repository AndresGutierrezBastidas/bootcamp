import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('');

  const handleNameChange = (event)=>{
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event)=>{
    event.preventDefault()
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) =>{
    event.preventDefault()
    setNewFilter(event.target.value)
    
  }

  const numbersToShow = () => {
    if(newFilter === ''){
      return persons
    }else{
      return persons.filter(person=>person.name.toUpperCase().includes(newFilter.toUpperCase()))
    } 
  }
  const addPerson = (event) =>{
    event.preventDefault()
    const objectPerson = {
      name:newName,
      number:newPhone,
    }
    for (let index = 0; index < persons.length; index++) {
      if(persons[index].name === newName){
        alert(objectPerson.name+"is already added to phonebook")
      }else{
        setPersons(persons.concat(objectPerson))
      }    
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} persons={persons}/>
    </div>
  )
}

export default App