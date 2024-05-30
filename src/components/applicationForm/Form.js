import React, { useEffect, useState } from 'react';
import CustomInputField from './customInputField/CustomInputField';
import CustomRadioButtons from './customRadiobuttns/CustomRadioButtons';
import SiblingSelectors from './siblingSelector/SiblingSelector';
import ListData from './ListData';

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
    const [getState, setGetState] = useState(null)

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
    const getData = () => {
        const data = JSON.parse(window.localStorage.getItem("data"));
        setGetState(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem('data', JSON.stringify(state));
        getData()
    };
    useEffect(()=>{
        getData()
    },[])

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
        <>
            <div className="max-w-3xl w-full m-4 lg:mx-auto bg-amber-300 py-8 px-10 rounded boxShadow-1">
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
            </div>

            <div className="max-w-3xl w-full m-4 lg:mx-auto border py-8 px-10 rounded boxShadow-1">
                <h2 className='text-2xl text-center font-bold'>INFORMATIONS</h2>
                <ListData data={getState} />
            </div>
        </>
    );
}

export default Form;
