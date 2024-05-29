import React from 'react'

function CustomInputField({ handleInput,state}) {
    return (
        <>
            <label htmlFor="motherocupation" className="after:content-['*'] block text-base font-medium leading-6 text-gray-900">
                Mother's Occupation
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    name="motherOcupation"
                    value={state?.motherOcupation}
                    id="motherOcupation"
                    className="block w-full rounded-md border-0 py-3 px-5 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Mother's Occupation 🤶"
                    onChange={handleInput}
                />
            </div>
        </>
    )
}

export default CustomInputField
