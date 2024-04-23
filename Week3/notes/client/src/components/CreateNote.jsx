import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const CreateNote = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    // Handel ERRORS 
    const [ErrorState, setError] = useState([])

    const nav = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()

        const newObj = {
            title,
            content,
            isImportant
        }
        axios.post("http://localhost:5000/api/notes/", newObj)
            .then((res) => {
                console.log(res.data._id)
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

    // console.log(Tit)



    return (
        <div>
            <form onSubmit={SubmitHandler}>
                {
                    ErrorState.map((err) => {
                        return <p style={{ color: "red" }}>{err}</p>
                    })
                }
                {/* {JSON.stringify(TitleError)} */}
                title : <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} /> <br />

                content : <textarea value={content} type="text" onChange={(e) => { setContent(e.target.value) }} /> <br />
                important ? : <input value={isImportant} type="checkbox" onChange={(e) => { setIsImportant(e.target.checked) }} />  <br />

                <button>Create Note</button>
            </form>
        </div>
    )
}

export default CreateNote