// jshint esversion:6
import { courseDataType } from "../../../data/dashboard"
import { truncateStr } from "../../../utils"
import tableIcon from "../../../assets/dashboard/tabler-icon-books.png";
import certificateIcon from "../../../assets/dashboard/certificateIcon.png";
import { TrendingCourseList } from "../../../components/dashboard";
import { useNavigate } from "react-router-dom";

interface CoursePageViewProps {
    courseData: courseDataType
}

function CoursePageView({ courseData }: CoursePageViewProps) {

    // Get page navigator
    const navigate = useNavigate();

    function handleEnrollClick() {
        navigate(`/dashboard/payment/${courseData.id}`);
    }

    // Set thee background image
    const style = {
        background: `url(${courseData.imagePreview}) no-repeat center center/cover`
    }

    return (
        <>
            {/* Course Image Preview */}
            <div className={`relative w-full h-[420px] rounded overflow-hidden`} style={style}>
                <div className="absolute inset-0 p-[2rem] bg-[#00000063] text-white">
                    <div className="w-full h-full flex flex-col justify-center items-start">
                        <div className="max-w-[400px]">
                            <div className="flex flex-col gap-y-4 md:gap-y-9">
                                <h1 className="text-3xl md:text-4xl font-bold">{courseData.title}</h1>
                                <p className="text-sm md:text-[1rem]">{courseData.description}</p>
                            </div>
                            <div className="flex justify-between mt-[2.5rem]">
                                <div><span className="mr-1 font-bold">Duration</span>:{courseData.weeksDuration} weeks</div>
                                <div className="font-bold">{courseData.level}</div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[80%] flex justify-between items-center mt-[2.5rem]">
                            <div className="text-2xl font-bold">${courseData.price}</div>
                            <button className="py-2 px-4 border-2 border-[white] cursor-pointer font-bold hover:bg-white hover:text-black" onClick={handleEnrollClick}>Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Description */}
            <div className=" mt-9 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr,_2fr] gap-4 mb-5">
                    <div>
                        <h2 className="text-xl font-bold">Course Duration</h2>
                        <div className="p-4 py-3 mt-5 grid grid-cols-[max-content,_1fr] md:grid-cols-3 justify-items-center text-pry  bg-[rgba(0,_0,_0,0.315)]">
                            <span className="md:justify-self-start">Week</span>
                            <span>Topic</span>
                            <span className="hidden md:inline md:justify-self-end">Duration</span>
                        </div>
                        <div className="h-[20px] bg-gray-200"></div>
                        <div className="px-4">
                            {courseData.courseDuration.map((course, index) => {
                                return (
                                    <div key={index} className="grid grid-cols-[max-content,_1fr] md:grid-cols-3 border-b-[1px] border-y-pry text-sm py-3 text-pry gap-x-4">
                                        <div className="truncate w-max">{`Week ${index}`}</div>
                                        <div className="truncate justify-self-center text-center mx-auto w-full sm:w-[300px] md:w-full">{course.topic}</div>
                                        <div className="hidden md:block truncate justify-self-end">{course.duration}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[2fr,_1fr] gap-4 lg:grid-cols-1">
                        <div className="p-3 border-[2px] border-pry lg:border-none">
                            <h2 className="text-xl mb-3 text-pry">About Course</h2>
                            <p className="text-sm">{truncateStr("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 350)}</p>
                        </div>
                        <div className="px-3">
                            <h2 className="text-lg text-pry">Course Packages</h2>
                            <ul className="flex flex-wrap gap-x-3">
                                {courseData.packages.map((coursePackage, index) => {
                                    return (
                                        <li key={index} className="text-sm my-1">{coursePackage}</li>
                                    )
                                })}
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

            {/* Course Author details */}
            <div className="mt-[1rem] w-full py-5 overflow-x-auto">
                <div className="grid gap-5 grid-rows-[repeat(1,_minmax(0,_50px))] grid-flow-col">
                    <div className="w-max flex items-center gap-x-2">
                        {/* Ịmage container */}
                        <div className="w-[50px] h-[50px]" >
                            <img className="w-full h-full" src={courseData.tutorImage} alt="tutor image" />
                        </div>
                        <div>
                            <h5 className="font-bold">Tutor</h5>
                            <p className="text-sm">{courseData.tutorName}</p>
                        </div>
                    </div>
                    <div className="w-max flex items-center gap-x-2">
                        {/* Ịmage container */}
                        <div className="w-[50px] h-[50px]" >
                            <img className="w-full h-full" src={certificateIcon} alt="tutor image" />
                        </div>
                        <div>
                            <h5 className="font-bold">Certificate</h5>
                            <p className="text-sm">Coursenetics Certificate</p>
                        </div>
                    </div>
                    <div className="w-max flex items-center gap-x-2">
                        {/* Ịmage container */}
                        <div className="w-[50px] h-[50px]" >
                            <img className="w-full h-full" src={tableIcon} alt="books image" />
                        </div>
                        <div>
                            <h5 className="font-bold">E-Learning</h5>
                            <p className="text-sm">Flexible Material</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section | Trending Courses */}
            <div>
                <h2 className="capitalize text-xl font-bold text-pry mt-9" >Other Trending Courses</h2>
                <div className="overflow-x-auto my-5">
                    <TrendingCourseList />
                </div>

            </div>
        </>
    );

}

export { CoursePageView }