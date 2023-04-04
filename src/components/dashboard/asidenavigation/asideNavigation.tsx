// jshint esversion:6
import { Logo } from "../../auth";
import Avatar from "../../../assets/dashboard/avatar.jpg"
import { NavLink } from "react-router-dom";
import { HomeSVG, PersonSVG, CourseSVG, GearFillSVG, PatchCheckSVG, StarFillSVG } from "../svg";

function AsideNavigation() {
    return (
        <>
            <div className="w-full h-full bg-white py-[2rem]">
                <div className="relative w-full h-full border-r-2 border-r-lgBg pt-[80px] overflow-y-auto flex flex-col">
                    <div className="absolute top-[-2vh]"><Logo /></div>

                    {/* Navigation Menu */}
                    <div>
                        {/* User Details */}
                        <div className="flex flex-col items-center gap-y-[0.1rem]">
                            <div className="w-[80px] h-[80px] overflow-hidden rounded-full">
                                <img src={Avatar} alt="image of user" />
                            </div>
                            <div className="text-md text-pry">Alli James</div>
                            <div className="text-xs text-gray-500">allijames@gmail.com</div>
                        </div>

                        {/* Navigation menu */}
                        <div className="w-full h-[50vh] min-h-[30px] pl-[40px] mx-auto flex flex-col mt-[3rem] overflow-visible">
                            <NavLink to="" end className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg"} py-2 w-max flex items-center gap-x-2`}>
                                <span><HomeSVG size={16} /></span>
                                <span>Dashboard</span>
                            </NavLink>
                            <NavLink to="userprofile" className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg transition hover:translate-x-2 ease-linear"} py-2 w-max flex items-center gap-x-2`}>
                                <span><PersonSVG size={16} /></span>
                                <span>Profile</span>
                            </NavLink>
                            <NavLink to="courses" className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg transition hover:translate-x-2 ease-linear"} py-2 w-max flex items-center gap-x-2`}>
                                <span><CourseSVG size={16} /></span>
                                <span>My Courses</span>
                            </NavLink>
                            <NavLink to="certifications" className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg transition hover:translate-x-2 ease-linear"} py-2 w-max flex items-center gap-x-2`}>
                                <span><PatchCheckSVG size={16} /></span>
                                <span>Certifications</span>
                            </NavLink>
                            <NavLink to="trackings" className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg transition hover:translate-x-2"} py-2 w-max flex items-center gap-x-2`}>
                                <span><StarFillSVG size={16} /></span>
                                <span>Trackings</span>
                            </NavLink>
                            <NavLink to="trackings" className={({ isActive }) => `${isActive ? "text-pry" : "text-pryLg transition hover:translate-x-2"} py-2 mt-auto w-max flex items-center gap-x-2`}>
                                <span><GearFillSVG size={16} /></span>
                                <span>Settings</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AsideNavigation };