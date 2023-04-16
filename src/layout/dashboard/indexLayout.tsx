// jshint esversion:6
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AsideNavigation } from "../../components/dashboard";
import { BellNotification } from "../../components/dashboard";

function DashboardLayout() {

    const navigate = useNavigate();

    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <div>
                {/* Mobile Navigation  */}
                <div className="md:hidden fixed top-0 inset-x-0 px-[1rem] py-[1rem] flex justify-between items-center">
                    <h1 className="text-2xl text-pry font-bold cursor-pointer" onClick={() => navigate("/dashboard")}>Coursentics</h1>
                    <div className="flex gap-x-2 h-[35px]">
                        <div><BellNotification /></div>
                        <div className="bg-[#ffffff93] px-2 py-[10px] font-bold shadow cursor-pointer rounded-sm" onClick={handleToggleNav}>
                            {navOpen ? (
                                <AiOutlineClose />
                            ) : (
                                <AiOutlineMenu />
                            )}
                        </div>
                    </div>
                </div>

                {/* Aside navigation */}
                <div className={`fixed inset-y-0 w-[200px] ${navOpen ? "left-0" : "-left-full"}  md:left-0 z-10`} onClick={() => setNavOpen(false)}>
                    <AsideNavigation />
                </div>

                {/* Outlet View */}
                <div className={`fixed top-[4rem] bottom-[1rem] md:inset-y-[2rem] left-0 md:left-[200px] right-0 overflow-y-auto px-[1rem] md:px-[1.5rem]`} onClick={() => setNavOpen(false)}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { DashboardLayout };       