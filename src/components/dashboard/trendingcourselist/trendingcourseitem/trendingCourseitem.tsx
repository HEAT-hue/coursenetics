// jshint esverion:6
import { useNavigate } from "react-router-dom";
import { StarFillSVG } from "../../svg";

interface TrendingCourseItemProps {
    id: string
    title: string
    descriptionPreview: string
    imagePreview: string
    rating: number
}

function TrendingCourseItem({ id, title, descriptionPreview, imagePreview, rating }: TrendingCourseItemProps) {

    const navigate = useNavigate();

    function handleCoursePageCLick() {
        const courseId = id
        navigate(`/dashboard/course/${courseId}`)
    }

    const style = {
        background: `url(${imagePreview}) no-repeat center center/cover`
    }

    return (
        <>
            <div className="w-[300px] h-full rounded shadow overflow-hidden cursor-pointer" onClick={handleCoursePageCLick}>
                <div className="relative w-full h-full" style={style}>
                    <div className="absolute inset-0 bg-[#00000086] p-6 flex flex-col justify-between">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-2xl text-[white] font-bold">{title}</h1>
                            <p className="text-lg text-white">{descriptionPreview}</p>
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