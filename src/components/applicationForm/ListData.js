import React from 'react'

function ListData({ data }) {
    console.log(data);
    return (
        <>
            <div className='font-bold'>
                {data?.motherOcupation ? (
                    <div className='border-b py-2'>
                        <span>
                            Mother Occupation : {data?.motherOcupation}
                        </span>
                    </div>
                ) : ""}
                {data?.siblingsName ? (
                    data?.siblingsName?.map((item) => {
                        console.log(item);
                        return <div className='border-b py-2'>
                            <span>
                                Gender : {item?.gender}
                            </span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <span>
                                relationShipType : {item?.relationShipType}
                            </span>
                        </div>
                    })

                ) : ""}
                {data?.familyStatus ? (
                    <div className='border-b py-2'>
                        <span>
                            With Family Status : {data?.familyStatus}
                        </span>
                    </div>
                ) : ""}

            </div>
        </>
    )
}

export default ListData
