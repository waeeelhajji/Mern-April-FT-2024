import React, { useState } from 'react'

const Form = () => {


    const [animal, setAnimal] = useState("")
    const [zoo, setZoo] = useState(["🦆", "🦁", "🦛"])



    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(animal)
        // console.log("clicked")
        if (zoo.length <= 4) {
            setZoo([...zoo, animal])
        }
        setAnimal("")
    }




    return (
        <fieldset>
            <legend>Form.jsx</legend>

            the state is :{JSON.stringify(animal)}
            <br />
            this is our Zoo :  {JSON.stringify(zoo)}
            <hr />

            <form onSubmit={SubmitHandler}>
                Add Animal : <input type="text" onChange={(e) => { setAnimal(e.target.value) }} value={animal} />
                {zoo.length >= 5 ? <p style={{ backgroundColor: "red" }}>the Zoo is full </p> : <p style={{ backgroundColor: "green" }} >you are clear to add more animals</p>}
                <button>Add Animal</button>
            </form>


            {zoo.map((oneAnimal, idx) => {
                return <div key={idx}>
                    {oneAnimal}
                </div>
            })}


        </fieldset>
    )
}

export default Form