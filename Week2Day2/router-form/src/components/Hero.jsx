import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Hero = () => {
    //! 1 STEP USE STATE
    const [hero, setHeroe] = useState()

    const nav = useNavigate()

    const { id } = useParams()
    console.log(id)


    useEffect(() => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
            .then((res) => {
                console.log(res.data)
                setHeroe(res.data)
            }).catch((err) => {
                console.log(err)
                nav("/error")
            })
    }, [id])

    return (
        <fieldset>
            <legend>Hero</legend>
            {/* {JSON.stringify(hero)} */}

            <Link to="/form"> Form</Link><br />
            {
                hero ? <>
                    {hero.name}
                    <p></p>
                    <img src={hero.images.sm} alt={hero.name} />
                </> : <p>Loading...</p>
            }


        </fieldset>
    )
}

export default Hero