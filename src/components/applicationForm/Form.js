import React, { useState } from 'react';
import CustomInputField from './customInputField/CustomInputField';
import CustomRadioButtons from './customRadiobuttns/CustomRadioButtons';
import SiblingSelectors from './siblingSelector/SiblingSelector';

function Form() {
    const [siblings, setSiblings] = useState([
        { id: 1 }
    ],);
    const [state, setState] = useState(
        {
            motherOcupation: "",
            siblingsName: [
                { gender: "", relationShipType: "" },
            ],
            familyStatus: ""
        }
    );

    //  -------------------handle Sibling Selector Ui Start-------------
    const handleAddSibling = () => {
        const newSibling = { id: siblings.length + 1 };
        setSiblings([...siblings, newSibling]);
    };

    const handleRemoveSibling = (id) => {
        const updatedSiblings = siblings.filter(sibling => sibling.id !== id);
        setSiblings(updatedSiblings);
    };
    //  -------------------handle Sibling Selector Ui End-------------

    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('data', JSON.stringify(state));
        console.log(state);
    };
    const handleInput = (e) => {
        const val = e.target.value
        const name = e.target.name
        const cloneData = { ...state }
        cloneData[name] = val
        setState(cloneData)
    };
    const handlselect = (e, index) => {
        const val = e.target.value;
        const name = e.target.name;
        const cloneData = { ...state };

        if (!cloneData.siblingsName[index]) {
            cloneData.siblingsName[index] = { gender: "", relationShipType: "" };
        }

        cloneData.siblingsName[index][name] = val;
        setState(cloneData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <CustomInputField
                handleInput={handleInput}
                state={state}
            />
            <SiblingSelectors
                siblings={siblings}
                handleAddSibling={handleAddSibling}
                handleRemoveSibling={handleRemoveSibling}
                handleInput={handlselect}
                state={state}
            />
            <CustomRadioButtons handleInput={handleInput} />
            <div className='justify_center flex'>
                <button className="bg-indigo-500 text-white rounded py-2 px-5 font-bold">
                    Save
                </button>
            </div>
        </form>
    );
}

export default Form;
