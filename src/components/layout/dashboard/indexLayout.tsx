// jshint esversion:6
import { useState } from "react";
import { Outlet } from "react-router-dom";


function DashboardLayout() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <div>
                <button className="md:hidden fixed top-[20px] right-[20px] rounded-sm mt-5 px-3 py-2 bg-slate-50 shadow-md font-bold hover:bg-slate-300 z-20 " onClick={handleToggleNav} >Toggle Nav</button>
                {/* Aside navigation */}
                <div className={`fixed inset-y-0 w-[200px] ${navOpen ? "left-0" : "-left-full"}  md:left-0 z-10`}>
                    <div className="w-full h-full bg-green-700 flex justify-center items-center">
                        <p className="text-white">Aside navigation</p>
                    </div>
                </div>
                <div className={`fixed inset-y-0 left-0 md:left-[200px] right-0 overflow-auto bg-red-500 flex flex-col items-center justify-center`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { DashboardLayout };       