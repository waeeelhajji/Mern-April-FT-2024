import React, { useState } from 'react'

const anotherOne = () => {

    // const [num, setNum] = useState()


    return (
        <fieldset>
            <legend>anotherOne.jsx</legend>
            <button onClick={() => console.log("Hello Again")}>Click Me</button>
        </fieldset>
    )
}

export default anotherOne