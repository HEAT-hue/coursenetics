// jshint esversion:6
import React, { ReactElement } from "react"
import { ChangeHandler } from "react-hook-form";

const FormInput = React.forwardRef<
    HTMLInputElement,
    { type: string, icon: ReactElement, error: string | undefined, placeholder: string, name: string, onChange: ChangeHandler, onBlur: ChangeHandler }>(({ onChange, onBlur, type, icon, error, placeholder, name }, ref) => {
        return (
            <div>
                <p className="text-sm text-red-700 font-mono">{error}</p>
                <div className="flex h-[3rem] w-full relative">
                    <div className=" absolute left-[5px] h-full max-w-content flex items-center px-[5px] text-pry">{icon}</div>
                    <input
                        className={`rounded w-full h-full px-[3rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none ${!error ? "focus:border-pry" : "border-red-700"}`}
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        ref={ref}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </div>
            </div>

        );
    })

export { FormInput };