// jshint esversion:6
import { SearchBar, BellNotification, CourseList, TrendingCourseList } from "../../../components/dashboard";

function HomeView() {
    return (
        <>
            <div className="flex flex-col gap-y-[1.3rem] px-[1.5rem] py-[1.5rem]">
                {/* Header | User info */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-y-1 items-start">
                        <h1 className="text-xl capitalize">Hello, Alli</h1>
                        <p className="font-mono text-sm text-[grey]">Welcome back to coursnetics</p>
                    </div>
                    <div className="flex gap-x-[1.2rem] h-[35px] mr-[2.8rem] md:mr-0">
                        <div className="hidden md:block"><SearchBar /></div>
                        <BellNotification />
                    </div>
                </div>

                {/* Section | My Courses */}
                <div>
                    <h2 className="capitalize text-2xl font-bold">My Courses</h2>
                    <div className="overflow-auto my-3">
                        <CourseList />
                    </div>
                </div>

                {/* Section | Trending Courses */}
                <div>
                    <h2 className="capitalize text-2xl font-bold text-pry" >Trending Courses</h2>
                    <div className="overflow-auto my-5">
                        <TrendingCourseList />
                    </div>

                </div>



            </div>
        </>
    );
}
export { HomeView };
