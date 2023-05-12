// jshint esversion:6
import React from "react";
import { ChangeHandler } from "react-hook-form";

interface optionType {
    label: string
    value: string
}

type selectOptionsType = optionType[]

const FormSelect = React.forwardRef<HTMLSelectElement, { error: string | undefined, disabled?: boolean | undefined, onChange: ChangeHandler, onBlur: ChangeHandler, name: string, defaultOption: string, selectOptions: selectOptionsType }>(({ onChange, onBlur, name, error, defaultOption, disabled = false, selectOptions }, ref) => {
    return (
        <div>
            <p className="text-sm text-red-700 font-mono">{error}</p>
            <div className="flex h-[3rem] w-full relative">
                <select
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    className={`rounded w-full h-full px-[1rem] pr-2 text-[black] bg-gray-200 border-2 text-[1rem] outline-none focus:border-pry`}
                >
                    <option value="" disabled selected>{defaultOption}</option>
                    {
                        selectOptions.map((optionData) => {
                            return (
                                <option value={optionData.value}>{optionData.label}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>

    );
})

export { FormSelect };