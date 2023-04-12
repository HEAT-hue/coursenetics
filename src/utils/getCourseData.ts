// jshint esversion:6
import { courseDataList } from "../data/dashboard";

function getCourseData(courseId: string) {
    return courseDataList.find((course) => course.id === courseId);
}

export { getCourseData };