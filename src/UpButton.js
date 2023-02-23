import React from 'react'

const UpButton = ({ handleUp }) => {
    return (
        <button style={{ margin: "10px" }} onClick={handleUp}> Up </button>
    )
}

export default UpButton