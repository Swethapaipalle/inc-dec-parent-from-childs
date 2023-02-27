import React, { useState } from 'react'
import UpButton from '../src/UpButton';
import DownButton from '../src/DownButton';

const Parent = () => {

    let [count, setCount] = useState(0);

    const handleUp = () => {
        setCount(count+1)
    }
    const handleDown = () => {
        setCount(count-1)
    }
    return (
        <>
            <div style={{margin:"5px 10px"}}>Count:{count}</div>
            <div className="button-group`">
            <UpButton handleUp={handleUp} />
            <DownButton handleDown={handleDown} />
            </div>

        </>
    )
}

export default Parent