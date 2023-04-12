// jshint esversion:6
import { getCourseData } from "../../../utils";
import { useParams, useNavigate } from "react-router-dom";
import { CoursePageView } from "../../../views/dashboard";

function CoursePage() {
    // get custom navigator
    const navigate = useNavigate();

    // Get the userId param from the URL.
    let { courseId } = useParams();

    // GET course details from API
    const courseData = getCourseData(courseId!);

    // NOT FOUND, redirect to home page
    if (!courseData) navigate("/dashboard");

    return (
        <>
            <CoursePageView courseData={courseData!} />
        </>
    );
}

export { CoursePage };