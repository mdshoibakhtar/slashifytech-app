import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

function SiblingSelectors({ siblings, handleAddSibling, handleRemoveSibling, handleInput, state }) {

    return (
        <>

            <label className="after:content-['*'] block text-base font-medium leading-6 text-gray-900">
                Sibling's Name
            </label>
            {siblings.map((sibling, index) => (
                <div className="flex flex-col md:flex-row gap-4 justify-between" key={index}>
                    <div className='my-1 flex-1'>
                        <select
                            id={`ind${sibling.id}`}
                            name={"gender"}
                            className="block w-full my-1 py-3 px-4 bg-slate-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={state.siblingsName[index]?.gender || ""}
                            onChange={(e) => handleInput(e, index)}
                        >
                            <option selected className="text-gray-900">Select Gender</option>
                            <option value="male" className="text-gray-900">Male</option>
                            <option value="female" className="text-gray-900">Female</option>
                        </select>
                    </div>
                    <div className='my-1 flex-1'>
                        <select
                            name={"relationShipType"}
                            className="block w-full my-1 py-3 px-4 bg-slate-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={state.siblingsName[index]?.relationShipType || ""}
                            onChange={(e) => handleInput(e, index)}
                        >
                            <option selected className="text-gray-900">Select Option</option>
                            <option value="brother" className="text-gray-900">Brother</option>
                            <option value="sister" className="text-gray-900">Sister</option>
                            <option value="cousins" className="text-gray-900">cousins</option>
                        </select>

                    </div>
                    <div className="flex justify-end items-center">
                        {index === 0 ? (
                            <button type='button' onClick={handleAddSibling} className="w-full flex justify-center border ring-2 ring-blue-500 text-dark font-bold py-3 px-4 rounded">
                                <FaPlus />
                            </button>
                        ) : (
                            <button type='button' onClick={() => handleRemoveSibling(sibling.id)} className="w-full flex justify-center border ring-2 ring-red-500 text-dark font-bold py-3 px-4 rounded">
                                <FaMinus />
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
export default SiblingSelectors;
