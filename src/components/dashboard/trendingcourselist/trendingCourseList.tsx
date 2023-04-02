// jshint esversion:6
import courseImage from "../../../assets/dashboard/chart.jpg";
import { TrendingCourseItem } from "./trendingcourseitem";

const data = [
    {
        id: 1,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
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


function TrendingCourseList() {
    return (
        <>
            {<div className="grid gap-3 grid-rows-[minmax(0,_300px)] grid-flow-col">
                {data.map((course) => {
                    return (
                        <TrendingCourseItem key={course.id} {...course} />
                    );
                })}
            </div>}
        </>
    );
}
export { TrendingCourseList };
