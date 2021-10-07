import Title from "./Title";
import Part from "./Part";

const Content = ({course}) => {
    return (
        <div>
            <Title text = {course.name}/>
            <Part parts = {course.parts}/>
            <h3>Total of {}</h3>
        </div>
    )
}

export default Content