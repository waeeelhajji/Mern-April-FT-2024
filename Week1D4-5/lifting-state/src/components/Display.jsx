import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend> Display.jsx</legend>
            {JSON.stringify(props.people)}
        </fieldset>
    )
}

export default Display