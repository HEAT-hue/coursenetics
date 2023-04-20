// jshint esversion:6
import React from "react"
import { ChangeHandler } from "react-hook-form";

const FormInput = React.forwardRef<
    HTMLInputElement,
    { type: string, error: string | undefined, placeholder: string, name: string, onChange: ChangeHandler, onBlur: ChangeHandler }
>(({ onChange, onBlur, type, error, placeholder, name }, ref) => {
    return (
        <input
            className={`rounded w-full h-full px-[1rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none ${!error ? "focus:border-pry" : "border-red-700"}`}
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
})

export { FormInput };