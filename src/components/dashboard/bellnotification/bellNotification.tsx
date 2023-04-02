// jshint esversion:6
import { BellSVG } from "../svg";

function BellNotification() {

    function handleNotificationClick() {
        alert("Functionality coming soon");
    }

    return (
        <>
            <div className="relative px-2 rounded text-gray-600 bg-bgLg flex items-center cursor-pointer hover:bg-lgBg" onClick={handleNotificationClick}>
                <BellSVG size={16}/>
                <div className="absolute bottom-2 right-1 rounded-full h-2 w-2 bg-red-600"></div>
            </div>
        </>
    );
}

export { BellNotification }; 