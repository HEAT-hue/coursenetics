// jshint esversion:6
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import userImage from "../../assets/dashboard/avatar.jpg";
import { FormInput, FormSelect } from "./editForm";
import { useAppSelector, useAppDispatch } from "../../hooks/dashboard";
import { userActions } from "../../features/dashboard";


export function EditForm() {

    const dispatch = useAppDispatch();

    // Form being edited?
    const [editProfileStatus, setEditProfileStatus] = useState<boolean>(false);

    // Get user details
    const { firstName, lastName, email, phoneNumber, gender, educationLevel, dayOfBirth, monthOfBirth, yearOfBirth } = useAppSelector((state) => state.user);

    // Create User Schema for form data validation
    const schema = z
        .object({
            firstName: z.string().nonempty({ message: "First name is required" }),
            lastName: z.string().nonempty({ message: "Last name is required" }),
            email: z.string().email({ message: "Invalid email address" }),
            phoneNumber: z.string().length(11, { message: "Enter 11 digits of your phone number" }),
            gender: z.string(),
            educationLevel: z.string(),
            dayOfBirth: z.string().nonempty({ message: "Day of birth cannot be empty" }).max(2),
            monthOfBirth: z.string().nonempty({ message: "Month of birth cannot be empty" }).max(2),
            yearOfBirth: z.string().nonempty({ message: "Year of birth cannot be empty" }).length(4)
        })

    // Get Form 
    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName, lastName, email, phoneNumber, gender, educationLevel, dayOfBirth, monthOfBirth, yearOfBirth
        }
    });

    // Extract inferred type from schema
    type FormData = z.infer<typeof schema>

    // Submit form
    const onSubmit: SubmitHandler<FormData> = (data) => {
        // Close the profile edit
        handleCloseEditProfile();

        // Reset values to upda
        dispatch(userActions.updateUser(data))
    }

    // handle Edit click
    function handleOpenEditProfile() {
        setEditProfileStatus(true)
    }

    // handle Close Edit Click
    function handleCloseEditProfile() {
        setEditProfileStatus(false);
    }

    // Reset
    useEffect(() => {
        if (formState.isSubmitSuccessful) {

            // If submit successfull, update default values with submitted values
            reset({
                firstName, lastName, email, phoneNumber, gender, educationLevel, dayOfBirth, monthOfBirth, yearOfBirth
            });
        }
    }, [formState, reset])

    return (
        <div className="max-w-[600px] w-[90%] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[80px] h-[80px] overflow-hidden rounded-full mb-5 mx-auto">
                    <img src={userImage} alt="image of user" />
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-y-5">
                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-2 gap-y-5">
                        <FormInput type="text" defaultValue={firstName} placeholder="First Name"  {...register("firstName")} error={errors?.firstName?.message} disabled={!editProfileStatus} />
                        <FormInput type="text" defaultValue={lastName} placeholder="Last Name" {...register("lastName")} error={errors?.lastName?.message} disabled={!editProfileStatus} />
                    </div>

                    <FormInput type="email" defaultValue={email} placeholder="Email" {...register("email")} error={errors?.email?.message} disabled={!editProfileStatus} />

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-2 gap-y-5">
                        <FormInput type="tel" defaultValue={phoneNumber} placeholder="Phone Number" {...register("phoneNumber")} error={errors?.phoneNumber?.message} disabled={!editProfileStatus} />
                        <FormSelect {...register("gender")} error={errors?.gender?.message} defaultOption="Gender" selectOptions={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }]} disabled={!editProfileStatus} />
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-x-2 gap-y-5">
                        <div>
                            <h2 className="text-pry text-lg mb-2">Date of Birth</h2>
                            <div className="flex gap-x-3">
                                <div className="w-[55px]">
                                    <FormInput type="tel" defaultValue={dayOfBirth} placeholder="01" {...register("dayOfBirth")} error={errors?.dayOfBirth?.message} disabled={!editProfileStatus} />
                                </div>
                                <div className="w-[55px]">
                                    <FormInput type="tel" defaultValue={monthOfBirth} placeholder="02" {...register("monthOfBirth")} error={errors?.monthOfBirth?.message} disabled={!editProfileStatus} />
                                </div>
                                <div className="w-[75px]">
                                    <FormInput type="tel" defaultValue={yearOfBirth} placeholder="03" {...register("yearOfBirth")} error={errors?.yearOfBirth?.message} disabled={!editProfileStatus} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-pry text-lg mb-2">Level of Education</h2>
                            <FormSelect {...register("educationLevel")} error={errors?.educationLevel?.message} defaultOption="Education" selectOptions={[{ label: "Primary", value: "primary" }, { label: "Secondary", value: "secondary" }, { label: "College", value: "College" }, { label: "Self", value: "self" }]} disabled={!editProfileStatus} />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-x-4">
                        {editProfileStatus ? (<button type="button" className="self-end px-9 py-[0.68rem] border-[2px] border-red-700 text-red-700 rounded mt-8" onClick={() => {
                            handleCloseEditProfile();

                            // Reset back to updated default value due to previous successful form submission
                            reset({
                                firstName, lastName, email, phoneNumber, gender, educationLevel, dayOfBirth, monthOfBirth, yearOfBirth
                            });
                        }}>Cancel</button>) : (<button type="button" className="self-end px-9 py-[0.68rem] border-[2px] border-pry text-[black] rounded mt-8" onClick={handleOpenEditProfile}>Edit</button>)}
                        <button type="submit" className="self-end px-9 py-3 bg-pry text-[white] rounded mt-8">Submit</button>
                    </div>

                </div>


            </form>
        </div>
    )
}

