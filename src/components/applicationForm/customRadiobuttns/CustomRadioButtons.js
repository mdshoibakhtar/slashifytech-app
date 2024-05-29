import React from 'react';

function CustomRadioButtons({handleInput}) {
    return (
        <div>
            <label htmlFor="price" className="block text-base font-medium leading-6 text-gray-900">
                Bride/Grooms Live With Family
            </label>
            <div className="mt-2"> {/* Added margin-top for spacing */}
                <div className="flex items-center gap-3">
                    <input
                        type="radio"
                        id="yes"
                        name="familyStatus"
                        value="yes"
                        onChange={handleInput}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded checked:bg-indigo-600 checked:border-transparent"
                    />
                    <label htmlFor="yes" className="text-sm font-medium text-gray-700">
                        Yes
                    </label>
                </div>
                <div className="flex items-center gap-3">
                    <input
                        type="radio"
                        id="no"
                        name="familyStatus"
                        value="No"
                        onChange={handleInput}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded checked:bg-indigo-600 checked:border-transparent"
                    />
                    <label htmlFor="no" className="text-sm font-medium text-gray-700">
                        No
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CustomRadioButtons;
