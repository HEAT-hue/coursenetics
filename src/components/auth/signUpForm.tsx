// jshint esversion:6
import { useRef } from "react";
import { FacebookSVG, GoogleSVG, LinkedInSVG, EmailSVG, ArrowClockwiseSVG, KeySVG } from "../../assets/svg";
import { NavLink } from "react-router-dom";

function SignUpForm() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    function handleSubmit() {
        alert("Functionlity coming soon!");
    }

    return (
        <>
            <div>
                <form>
                    <div className="max-w-[350px] w-full px-2 mx-auto mt-[5rem] flex flex-col items-center">
                        <h1 className="text-pry font-bold text-3xl">Create Account</h1>
                        <div className="flex justify-center gap-x-5 mt-3">
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><FacebookSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><GoogleSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><LinkedInSVG size={16} /></div>
                        </div>

                        {/* Form fields */}
                        <div className="mt-[4rem] flex flex-col w-full gap-y-5">
                            <div className="flex h-[3rem] w-full relative">
                                <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div>
                                <input className="rounded w-full h-full pl-[2.5rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none focus:border-pry" type="email" placeholder="Email" ref={emailRef} />
                            </div>
                            <div className="flex h-[3rem] w-full relative">
                                <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><KeySVG size={20} /></div>
                                <input className="rounded w-full h-full pl-[2.5rem] text-[black] bg-gray-200 border-2 text-[1rem] outline-none focus:border-pry" type="password" placeholder="Password" ref={passwordRef} />
                            </div>
                            <div className="flex h-[3rem] w-full relative">
                                <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><ArrowClockwiseSVG size={20} /></div>
                                <input className="rounded w-full h-full pl-[2.5rem] bg-gray-200 border-2 text-[black] text-[1rem] outline-none focus:border-pry" type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                            </div>
                        </div>
                        {/* path to login page*/}
                        <NavLink to={"/auth/login"} className={"self-start"}>
                            <div className="self-start text-gray-600 font-mono mt-2">Login Here</div>
                        </NavLink>

                        {/* Form submit buttons */}
                        <button type="submit" className="self-end px-6 py-3 bg-pry text-[white] rounded mt-8" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>

            </div>
        </>
    );
}
export { SignUpForm };
