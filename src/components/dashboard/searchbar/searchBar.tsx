// jshint esversion:6

import { useState } from "react";
import { SearchSVG } from "../svg";


function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e: any) {
        setSearchTerm(e.target.value)
    }

    function handleSearch(e: any) {
        if (e.key === 'Enter') {
            alert("Functionality coming soon");
            setSearchTerm("");
        }

    }

    return (
        <>
            <div className="h-full w-[200px] relative">
                <input className="w-full h-full rounded bg-bgLg text-[#2b2929] pl-[2rem] hover:bg-lgBg" value={searchTerm} placeholder="Search..." onChange={handleChange} onKeyDown={handleSearch} />
                <div className="absolute top-[50%] translate-y-[-50%] left-[0.5rem] text-[#8a8686]"><SearchSVG size={16} /></div>
            </div>
        </>
    ); handleSearch
}

export { SearchBar }