import Note from "./Note";
const Persons = (props)=>{
    const {numbersToShow,persons} = props
    return (
        <ul>
            {numbersToShow().map(note=>
            <Note key = {persons.indexOf(note)} note = {note}/>
            )}
        </ul>
    );
}

export default Persons