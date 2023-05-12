// jshint esversion:6
import React from "react"
import { ChangeHandler } from "react-hook-form";

export const FormInput = React.forwardRef<
    HTMLInputElement,
    { type: string, defaultValue?: string | undefined, disabled?: boolean | undefined, error: string | undefined, placeholder?: string, name: string, onChange: ChangeHandler, onBlur: ChangeHandler }>(({ onChange, onBlur, type, defaultValue, disabled = false, error, placeholder, name }, ref) => {
        return (
            <div>
                <p className="text-sm text-red-700 font-mono">{error}</p>
                <div className="flex h-[3rem] w-full relative">
                    <input
                        className={`rounded w-full h-full px-[1rem] pr-2 text-[black] text-[1rem] outline-none border-2 ${error && "border-red-700"} ${disabled ? "bg-gray-200" : "bg-white focus:border-pry"}`}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        ref={ref}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                </div>
            </div>
        );
    })