import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Main = () => {

    const [Movies, setAllMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/movies/")
            .then((res) => {
                setAllMovies(res.data)

                console.log(Movies)

            }).catch(err => {
                console.log(err)
            })
    }, [])
    // console.log(Movies)

    const deleteMovie = (movieID) => {
        axios.delete("http://localhost:5000/api/movies/" + movieID)
            .then((res) => {
                console.log(Movies)
                const FilteredMovie = Movies.filter((oneMovie) => {
                    return oneMovie._id !== movieID
                })
                setAllMovies(FilteredMovie)

            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h3>All Movies</h3>
            {/* {JSON.stringify(Movies)} */}
            {
                Movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie._id}>
                            <Link to={"/movies/" + oneMovie._id}>
                                <h4>{oneMovie.title}</h4>
                            </Link>
                            <img src={oneMovie.image} alt={oneMovie.title} width="150" />
                            {
                                <p>Have you see this movie ?  {oneMovie.seen ? "yes" : "no"}</p>
                            }
                            <Link to={`/movies/${oneMovie._id}/update`}>Update</Link>
                            <button onClick={() => { deleteMovie(oneMovie._id) }}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Main