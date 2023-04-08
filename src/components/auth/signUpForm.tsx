// jshint esversion:6
import { FacebookSVG, GoogleSVG, LinkedInSVG, EmailSVG, ArrowClockwiseSVG, KeySVG } from "../../assets/svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

// Create object schema for form values
const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Password must be 5 or more characters long" }),
    confirmPassword: z.string().min(5, { message: "Password must be 5 or more characters long" })
})
    .refine((data) => {
        return data.password === data.confirmPassword
    }, { message: "Passwords do not match", path: ["confirmPassword"] });

// Extract the inferred type
type FormData = z.infer<typeof schema>;

function SignUpForm() {

    const onSubmit = (data: FormData) => console.log(data);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-[400px] w-full px-4 mx-auto mt-[5rem] flex flex-col items-center">
                        <h1 className="text-pry font-bold text-3xl">Create Account</h1>
                        <div className="flex justify-center gap-x-5 mt-3">
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><FacebookSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><GoogleSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><LinkedInSVG size={16} /></div>
                        </div>

                        {/* Form fields */}
                        <div className="mt-[4rem] flex flex-col w-full gap-y-5">
                            <div>
                                <p className="text-sm text-red-700 font-mono">{errors?.email?.message}</p>
                                <div className="flex h-[3rem] w-full relative">
                                    <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div>
                                    <input className={`rounded w-full h-full pl-[3rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none ${!errors?.email ? "focus:border-pry" : "border-red-700"}`} type="email" placeholder="Email" {...register("email")} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-red-700 font-mono">{errors?.password?.message}</p>
                                <div className="flex h-[3rem] w-full relative">
                                    <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><KeySVG size={20} /></div>
                                    <input className={`rounded w-full h-full pl-[3rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none ${!errors?.password ? "focus:border-pry" : "border-red-700"}`} type="password" placeholder="Password" {...register("password")} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-red-700 font-mono">{errors.confirmPassword?.message}</p>
                                <div className="flex h-[3rem] w-full relative">
                                    <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><ArrowClockwiseSVG size={20} /></div>
                                    <input className={`rounded w-full h-full pl-[3rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none ${!errors?.confirmPassword ? "focus:border-pry" : "border-red-700"}`} type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
                                </div>
                            </div>
                        </div>

                        {/* path to login page*/}
                        <NavLink to={"/auth/login"} className={"self-start"}>
                            <div className="self-start text-gray-600 font-mono mt-2">Login Here</div>
                        </NavLink>

                        {/* Form submit buttons */}
                        <button type="submit" className="self-end px-6 py-3 bg-pry text-[white] rounded mt-8">Sign Up</button>
                    </div>
                </form>

            </div>
        </>
    );
}
export { SignUpForm };
