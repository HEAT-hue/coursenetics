// jshint esversion:6
import courseImage from "../../../assets/dashboard/chart.jpg";
import { CourseItem } from "./courseitem";

const data = [
    {
        id: 1,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 5,
        progress: 35
    },
    {
        id: 2,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 10,
        progress: 78
    },
    {
        id: 3,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 5,
        progress: 35
    },
    {
        id: 4,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 5,
        progress: 35
    },
    {
        id: 5,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 10,
        progress: 78
    },
    {
        id: 6,
        title: "Marketing and sales",
        imgPreview: courseImage,
        lessonAmt: 12,
        totalTime: "2hr 45min",
        videosWatched: 5,
        progress: 35
    }
]

function CourseList() {
    return (
        <div className="grid gap-3 grid-rows-[repeat(2,_minmax(0,_140px))] grid-flow-col">
            {data.map((course) => {
                return (
                    <CourseItem key={course.id} {...course} />
                );
            })}
        </div>
    );
}

export { CourseList };