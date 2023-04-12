// jshint esversion:6
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AsideNavigation } from "../../components/dashboard";

function DashboardLayout() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (
        <>
            <div>
                <div className="md:hidden bg-[#ffffff93] fixed top-[-0.3rem] right-[20px] rounded-sm mt-5 px-2 py-[10px] font-bold shadow z-20 cursor-pointer " onClick={handleToggleNav}>
                    {navOpen ? (
                        <AiOutlineClose />
                    ) : (
                        <AiOutlineMenu />
                    )}
                </div>

                {/* Aside navigation */}
                <div className={`fixed inset-y-0 w-[200px] ${navOpen ? "left-0" : "-left-full"}  md:left-0 z-10`}>
                    <AsideNavigation />
                </div>

                {/* Outlet View */}
                <div className={`fixed inset-y-[1rem] md:inset-y-[2rem] left-0 md:left-[200px] right-0 overflow-y-auto px-[1rem] md:px-[1.5rem]`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { DashboardLayout };       