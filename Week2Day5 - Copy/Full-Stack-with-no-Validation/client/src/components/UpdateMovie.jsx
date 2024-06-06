import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateMovie = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [releaseYear, setReleaseYear] = useState(1900)
    const [seen, setSeen] = useState(true)
    const nav = useNavigate()
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:5000/api/movies/" + id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setImage(res.data.image)
                setReleaseYear(res.data.releaseYear)
                setSeen(res.data.seen)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    const UpdateHandler = (e) => {
        e.preventDefault()
        axios.patch("http://localhost:5000/api/movies/" + id, {
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
        <>
            <h3> Update Movie</h3>
            <form onSubmit={UpdateHandler}>

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
                <button>Update Movie</button>


            </form>


        </>
    )
}

export default UpdateMovie