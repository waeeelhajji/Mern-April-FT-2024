import React, { useState } from 'react'

const Form = (props) => {

    const [onePeople, setOnePeople] = useState({})

    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [color, setColor] = useState("")

    console.log(props.people)
    const x = { x: 5 }

    const PersonCreate = (e) => {
        e.preventDefault()
        const newOBj = {
            name,
            height: height,
            color: color


        }

        props.functionCreate(newOBj)
    }



    return (
        <fieldset>
            <legend>Form.jsx</legend>
            N :{JSON.stringify(name)} <p></p>
            H :{JSON.stringify(height)} <p></p>
            C: {JSON.stringify(color)}
            <p></p>

            <form onSubmit={PersonCreate}>
                name : <input onChange={(e) => { setName(e.target.value) }} value={name} /> <p></p>
                height :<input type="number" onChange={(e) => { setHeight(e.target.value) }} value={height} /> <p></p>
                color :<input onChange={(e) => { setColor(e.target.value) }} value={color} />

                <button>Add Person</button>
            </form>


        </fieldset>
    )
}

export default Form