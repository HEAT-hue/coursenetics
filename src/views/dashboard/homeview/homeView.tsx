// jshint esversion:6
import { CourseList, TrendingCourseList, Header } from "../../../components/dashboard";

function HomeView() {
    return (
        <>
            <div className="flex flex-col gap-y-[1.3rem] ">
                {/* Header | User info */}
                {/* <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-y-1 items-start">
                        <h1 className="text-xl capitalize">Hello, Alli</h1>
                        <p className="font-mono text-sm text-[grey]">Welcome back to coursnetics</p>
                    </div>
                    <div className="hidden md:flex gap-x-[1.2rem] h-[35px] mr-[2.8rem] md:mr-0">
                        <div><SearchBar /></div>
                        <BellNotification />
                    </div>
                </div> */}
                <Header />

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
                    <div className="overflow-x-auto my-5">
                        <TrendingCourseList />
                    </div>

                </div>



            </div>
        </>
    );
}
export { HomeView };
