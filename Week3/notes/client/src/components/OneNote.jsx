import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneNote = () => {

    const [oneNote, setOneNote] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/api/notes/" + id)
            .then((res) => {
                console.log(res.data)
                setOneNote(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            {
                oneNote ? <>
                    <h1>{oneNote.title}</h1>
                </> : <p>Loading...</p>
            }



        </div>
    )
}

export default OneNote