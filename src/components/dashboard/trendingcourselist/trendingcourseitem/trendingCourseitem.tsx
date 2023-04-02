// jshint esverion:6

import { StarFillSVG } from "../../svg";

interface TrendingCourseItemProps {
    title: string
    description: string
    imgPreview: string
    rating: number
}

function TrendingCourseItem({ title, description, imgPreview, rating }: TrendingCourseItemProps) {
    return (
        <>
            <div className="w-[300px] h-full rounded shadow overflow-hidden ">
                <div className="relative w-full h-full bg-[url('../../../../../src/assets/dashboard/robot.jpg')] bg-no-repeat bg-center bg-cover">
                    <div className="absolute inset-0 bg-[#00000086] p-6 flex flex-col justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-2xl text-[white] font-bold">Robotics</h1>
                            <p className="text-lg text-white">Learn the fundamnetals of robotics to be a robotics engineer!</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-x-2 items-center">
                                <span className={`${rating > 1 ? "text-yellow-400" : "hidden"}`}><StarFillSVG size={16} /></span>
                                <span className="text-yellow-400"><StarFillSVG size={16} /></span>
                                <span className="text-yellow-400"><StarFillSVG size={16} /></span>
                                <span className="text-yellow-400"><StarFillSVG size={16} /></span>
                                <span className="text-yellow-400"><StarFillSVG size={16} /></span>
                            </div>
                            <button className="bg-[white] text-pry px-3 py-2 rounded font-arial">Enroll now</button>
                        </div>
                    </div>

                </div>
                <div></div>
            </div>
        </>
    );
}

export { TrendingCourseItem }