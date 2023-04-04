// jshint esversion:6
import companyLogo from "../../../assets/dashboard/courseLogo.png";

function Logo() {
    return (
        <>
            <div className="w-[80px] h-[80px]">
                <img className="w-full h-full" src={companyLogo} alt="Logo" />
            </div>
        </>
    );
}

export { Logo }