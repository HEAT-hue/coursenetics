// jshint esversion:6
import { useRef } from "react";
import { FacebookSVG, GoogleSVG, LinkedInSVG, EmailSVG, ArrowClockwiseSVG, KeySVG } from "../../assets/svg";
import { NavLink } from "react-router-dom";

function LoginForm() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        alert("Functionlity coming soon!");
    }

    return (
        <>
            <div>
                <form>
                    <div className="w-[350px] mx-auto mt-[5rem] flex flex-col items-center">
                        <h1 className="text-pry font-bold text-3xl">Login</h1>
                        <div className="flex justify-center gap-x-5 mt-3">
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><FacebookSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><GoogleSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><LinkedInSVG size={16} /></div>
                        </div>

                        {/* Form fields */}
                        <div className="mt-10 flex flex-col w-full gap-y-5">
                            <div className="flex h-[3rem] w-full relative">
                                <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div>
                                <input className="rounded w-full h-full pl-[3rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none focus:border-pry" type="email" placeholder="Email" ref={emailRef} />
                            </div>
                            <div className="flex h-[3rem] w-full relative">
                                <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><KeySVG size={20} /></div>
                                <input className="rounded w-full h-full pl-[3rem] text-[black] bg-gray-200 border-2 text-[1rem] outline-none focus:border-pry" type="password" placeholder="Password" ref={passwordRef} />
                            </div>
                        </div>
                        <div className="w-full flex justify-between">
                            <NavLink to={"/auth/signup"}>
                                <div className="text-gray-600 text-sm font-mono mt-2">Sign Up</div>
                            </NavLink>

                            <div className="text-red-600 text-sm font-mono mt-2">forgot password</div>
                        </div>
                        {/* path to login page*/}

                        {/* Form submit buttons */}
                        <button type="submit" className="self-end px-9 py-3 bg-pry text-[white] rounded mt-8" onClick={handleSubmit}>Login</button>
                    </div>
                </form>

            </div>
        </>
    );
}
export { LoginForm };
