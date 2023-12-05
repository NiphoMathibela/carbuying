import React from 'react'

const MainButton = (props) => {
    return (
        <>
            <button className=' w-28 h-8  bg-[#3563E9] rounded-md text-white p-1 m-1'>{props.btnText}</button>
        </>
    )
}

export default MainButton                   