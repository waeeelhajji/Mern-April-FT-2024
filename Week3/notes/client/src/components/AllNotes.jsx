import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllNotes = () => {

    const [notes, setNotes] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/api/notes/")
            .then((res) => {
                console.log(res)
                setNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            {
                notes.map((oneNote) => {
                    return (
                        <div key={oneNote._id}>
                            <Link to={"/notes/" + oneNote._id}>
                                <h2>{oneNote.title}</h2>
                            </Link>
                            <h2>{oneNote.content}</h2>
                            <p>{oneNote.createdAt}</p>
                            <Link to={`/notes/${oneNote._id}/edit`}>Update</Link>
                            <hr />
                        </div>
                    )
                })
            }







        </div>
    )
}

export default AllNotes