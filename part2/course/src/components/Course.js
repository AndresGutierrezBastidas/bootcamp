
import Content from "./Content";

const Course = ({course}) => {
    return (
        <div>
            {course.map(curso => <Content key = {curso.id} course = {curso}/>)}
        </div>
    )
}

export default Course;