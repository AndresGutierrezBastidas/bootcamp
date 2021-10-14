import Title from "./Title";
import Part from "./Part";

const Content = ({course}) => {
    const {name,parts} = course
    const partes = parts.map(part => part.exercises)

    return (
        <div>
            <Title text = {name}/>
            <Part parts = {parts}/>
            <h3>Total of {partes.reduce((s, p) => s + p)}</h3>
        </div>
    )
}

export default Content