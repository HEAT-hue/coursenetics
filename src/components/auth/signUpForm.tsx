// jshint esversion:6
import { FacebookSVG, GoogleSVG, LinkedInSVG, EmailSVG, ArrowClockwiseSVG, KeySVG } from "../../assets/svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from "./authForm";

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
                    <div className="max-w-[400px] w-full mx-auto flex flex-col items-center">
                        <h1 className="text-pry font-bold text-3xl">Create Account</h1>
                        <div className="flex justify-center gap-x-5 mt-4">
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><FacebookSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><GoogleSVG size={16} /></div>
                            <div className="p-2 shadow border-[1px] rounded-full text-pry cursor-pointer hover:shadow-md"><LinkedInSVG size={16} /></div>
                        </div>

                        {/* Form fields */}
                        <div className="mt-[4rem] flex flex-col w-full gap-y-5">

                            <FormInput type="text" placeholder="Email" {...register("email")} error={errors?.email?.message} icon={<EmailSVG size={20} />} />

                            <FormInput type="password" placeholder="Password" {...register("password")} error={errors?.password?.message} icon={<KeySVG size={20} />} />

                            <FormInput type="password" placeholder="Confirm password" {...register("confirmPassword")} error={errors?.confirmPassword?.message} icon={<ArrowClockwiseSVG size={20} />} />
                            
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
