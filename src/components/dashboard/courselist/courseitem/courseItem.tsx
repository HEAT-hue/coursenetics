// jshint esversion:6
import { StopwatchSVG, JournalSVG } from "../../svg"

interface CourseItemProps {
    title: string
    imgPreview: string
    lessonAmt: number
    totalTime: string
    videosWatched: number
    progress: number
}

function CourseItem({ title, imgPreview, lessonAmt, totalTime, videosWatched, progress }: CourseItemProps) {
    return (
        <>
            <div className="w-[80vw] max-w-[400px] h-full p-4 bg-lgBg shadow">
                <div className="h-full flex gap-x-2">
                    <div className="w-[200px] h-full">
                        <img className="w-full h-full" src={imgPreview} alt="courseImg" />
                    </div>
                    <div className="basis-full flex flex-col justify-between">
                        <div className="w-full flex justify-between items-start">
                            <h2 className="w-[15ch] font-bold">{title}</h2>
                            <span className="font-mono text-xs text-end text-[#0f0f0f]">{`${videosWatched} videos watched`}</span>
                        </div>
                        <div className="flex items-end justify-between gap-x-2">
                            <div className="flex flex-col gap-y-1">
                                <div className="flex items-center gap-x-1">
                                    <span className="text-pry"><JournalSVG size={16} /></span>
                                    <span className="text-[12px]">{`Lessons ${lessonAmt}`}</span>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <span className="text-pry"><StopwatchSVG size={16} /></span>
                                    <span className="text-[12px]">{`${totalTime}`}</span>
                                </div>
                            </div>
                            <div>
                                <div className="w-[80px] h-[10px] rounded-md mb-1 bg-bgLg overflow-hidden">
                                    <div className={`h-full bg-pry`} style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { CourseItem };
