// jshint esversion:6
import { TrendingCourseItem } from "./trendingcourseitem";
import { courseDataList } from "../../../data/dashboard";


function TrendingCourseList() {
    return (
        <>
            {<div className="grid gap-3 grid-rows-[minmax(0,_300px)] grid-flow-col">
                {courseDataList.map((course) => {
                    return (
                        <TrendingCourseItem key={course.id} {...course} rating={5} />
                    );
                })}
            </div>}
        </>
    );
}
export { TrendingCourseList };
