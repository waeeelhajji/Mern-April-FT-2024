import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateNote = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)
    const [oneNote, setOneNote] = useState(null)

    // Handel ERRORS 
    const [ErrorState, setError] = useState([])


    const nav = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:5000/api/notes/" + id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                setIsImportant(res.data.isImportant)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    const UpdateHandler = (e) => {
        e.preventDefault()

        const newObj = {
            title,
            content,
            isImportant
        }
        axios.patch(`http://localhost:5000/api/notes/${id}`, newObj)
            .then((res) => {
                console.log(res)
                nav("/notes/" + res.data._id)
            })
            .catch(err => {
                console.log(err.response.data.errors.title)
                const ServerErrors = err.response.data.errors
                const errArray = []
                for (const key of Object.keys(ServerErrors)) {
                    errArray.push(ServerErrors[key].message)
                }
                setError(errArray)

            })
    }






    return (
        <div>
            <form onSubmit={UpdateHandler}>
                title : <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} /> <br />
                content : <textarea value={content} type="text" onChange={(e) => { setContent(e.target.value) }} /> <br />
                important ? : <input value={isImportant} type="checkbox" onChange={(e) => { setIsImportant(e.target.checked) }} />  <br />

                <button>Update Note</button>
            </form>
        </div>
    )
}

export default UpdateNote