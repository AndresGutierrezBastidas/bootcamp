
import Content from "./Content";

const Course = ({course}) => {
    return (
        <Content key = {course.id} course = {course}/>
    )
}

export default Course;