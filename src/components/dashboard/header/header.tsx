// jshint esversion:6
import { SearchBar } from "../searchbar";
import { BellNotification } from "../bellnotification";
import { useAppSelector } from "../../../hooks/dashboard";

export function Header() {
    const { firstName } = useAppSelector((state) => state.user)
    return (
        <>
            {/* Header | User info */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-y-1 items-start">
                    <h1 className="text-xl capitalize">Hello, {firstName}</h1>
                    <p className="font-mono text-sm text-[grey]">Welcome back to coursnetics</p>
                </div>
                <div className="hidden md:flex gap-x-[1.2rem] h-[35px] mr-[2.8rem] md:mr-0">
                    <div><SearchBar /></div>
                    <BellNotification />
                </div>
            </div>
        </>
    );
}