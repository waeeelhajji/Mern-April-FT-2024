import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [number, setNumber] = useState(0)
    const nav = useNavigate()



    const GetNumber = (e) => {
        e.preventDefault()
        nav("/hero/" + number)
    }

    return (
        <div>
            {JSON.stringify(number)}
            <form onSubmit={GetNumber}>
                Hero number <input type='number' onChange={(e) => { setNumber(e.target.value) }} />
                <button>Get Hero</button>
            </form>
        </div>
    )
}

export default Form