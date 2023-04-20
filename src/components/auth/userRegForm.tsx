// jshint esversion:6
import { FacebookSVG, GoogleSVG, LinkedInSVG, EmailSVG, ArrowClockwiseSVG, KeySVG } from "../../assets/svg";
import { NavLink } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput, FormSelect } from "./form";

// Create User Schema for form data validation
const schema = z
    .object({
        firstname: z.string().nonempty({ message: "First name is required" }),
        lastname: z.string().nonempty({ message: "Last name is required" }),
        username: z.string().nonempty({ message: "Username is required" }).min(5, { message: "Username must be at least 5 characters" }),
        tel: z.string().length(11, { message: "Enter 11 digits of your phone number" }),
        gender: z.string(),
        education: z.string(),
    })

// Extract inferred type from schema
type FormData = z.infer<typeof schema>

function UserRegForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    // Submit form
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-[600px] w-full mx-auto flex flex-col items-center">
                        <h1 className="text-pry font-bold text-3xl">Complete Registration</h1>

                        {/* Form fields */}
                        <div className="mt-[2rem] flex flex-col w-full gap-y-5">
                            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-2 gap-y-5">
                                <div>
                                    <p className="text-sm text-red-700 font-mono">{errors?.firstname?.message}</p>
                                    <div className="flex h-[3rem] w-full relative">
                                        {/* <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                        <FormInput type="text" placeholder="First Name" {...register("firstname")} error={errors?.firstname?.message} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-red-700 font-mono">{errors?.lastname?.message}</p>
                                    <div className="flex h-[3rem] w-full relative">
                                        {/* <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                        <FormInput type="text" placeholder="Last name" {...register("lastname")} error={errors?.lastname?.message} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-red-700 font-mono">{errors?.username?.message}</p>
                                <div className="flex h-[3rem] w-full relative">
                                    {/* <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                    <FormInput type="text" placeholder="Username" {...register("username")} error={errors?.username?.message} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-red-700 font-mono">{errors?.tel?.message}</p>
                                <div className="flex h-[3rem] w-full relative">
                                    {/* <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                    <FormInput type="tel" placeholder="Phone number" {...register("tel")} error={errors?.tel?.message} />
                                </div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-2 gap-y-5">
                                <div>
                                    <p className="text-sm text-red-700 font-mono">{errors?.gender?.message}</p>
                                    <div className="flex h-[3rem] w-full relative">
                                        {/* <div className="absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                        <FormSelect {...register("gender")} defaultOption="Gender" selectOptions={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }]} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-red-700 font-mono">{errors?.education?.message}</p>
                                    <div className="flex h-[3rem] w-full relative">
                                        {/* <div className="absolute left-[5px] h-full max-w-content flex items-center p8x-[5px] text-pry"><EmailSVG size={20} /></div> */}
                                        <FormSelect {...register("education")} defaultOption="Education" selectOptions={[{ label: "Primary", value: "primary" }, { label: "Secondary", value: "secondary" }, { label: "College", value: "College" }, { label: "Self", value: "self" }]} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form submit buttons */}
                        <button type="submit" className="self-end w-full px-9 py-3 bg-pry text-[white] rounded mt-8">Submit</button>
                    </div>
                </form>

            </div>
        </>
    );
}
export { UserRegForm };
