import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateMovie = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [releaseYear, setReleaseYear] = useState(1900)
    const [seen, setSeen] = useState(true)
    const nav = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/movies/", {
            title: title,
            image: image,
            releaseYear: releaseYear,
            seen: seen
        })
            .then((res) => {
                console.log("✅✅✅✅✅")
                nav("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h3> Create Movie</h3>
            <form onSubmit={SubmitHandler}>

                title :
                <input value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} />
                <br />
                image :
                <input value={image} type="text" onChange={(e) => { setImage(e.target.value) }} />
                <br />
                releaseYear :
                <input value={releaseYear} type="number" onChange={(e) => { setReleaseYear(e.target.value) }} />
                <br />
                seen :
                <input value={seen} type="checkbox" onChange={(e) => { setSeen(e.target.checked) }} />


                <br />
                <button>Create Movie</button>


            </form>


        </div>
    )
}

export default CreateMovie