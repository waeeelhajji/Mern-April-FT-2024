import React, { useState } from 'react'

import AnotherOne from './AnotherOne'

const AnotherComponet = (props) => {
    // console.log(props.cc)
    //? CREATE A STATE FOR THIS COMPONENT
    const [num, setNum] = useState(0)
    //----state--function that will change the state

    const { animals } = props
    console.log(animals)

    const IncrementNum = () => {
        console.log("hello")
        setNum(num + 1)

    }

    return (
        <fieldset>
            <legend>AnotherComponent.jsx</legend>
            <h3>Hello Second Comp</h3>
            ----------------------State: {JSON.stringify(num)}<br />
            <button onClick={() => IncrementNum()}>Click Me</button>
            {/* <ul>
                {
                    animals.map((elm, idx) => {
                        return <li key={idx}>{elm}</li>
                    })
                }
            </ul> */}
            {/* <AnotherOne data={animals} /> */}

        </fieldset>
    )
}

export default AnotherComponet