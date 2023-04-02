// jshint esversion:6
import courseImage from "../../../assets/dashboard/chart.jpg";
import { TrendingCourseItem } from "./trendingcourseitem";

const data = [
    {
        id: 1,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
    },
    {
        id: 2,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
    },
    {
        id: 3,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
    },
    {
        id: 4,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
    },
    {
        id: 5,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
    },
    {
        id: 6,
        title: "Marketing and sales",
        description: "Learning all the intricasies about marketing",
        imgPreview: courseImage,
        rating: 3
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
