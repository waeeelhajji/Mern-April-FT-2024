import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneMovie = () => {
    const [movie, setMovie] = useState({})

    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:5000/api/movies/" + id)
            .then((res) => {
                console.log(res.data)
                setMovie(res.data)
            }).catch((err) => {
                console.log(err)
            })


    }




        , [])

    return (
        <div>
            <h4>{movie.title}</h4>
            <img src={movie.image} alt="" width="130" />


        </div>
    )
}

export default OneMovie