
const Note = (props) => {
    const {note} = props
    return (
        <li>
            {note.name} {note.number}
        </li>
    )
}

export default Note