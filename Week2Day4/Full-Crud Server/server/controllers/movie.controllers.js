const Movie = require("../models/movie.model")



module.exports = {
    //? =========== READ ALL ==========
    AllMovies: (req,res) => {
        // db.movies.find()
        Movie.find()
            .then((allMovies) => {
                console.log(allMovies)
                res.json(allMovies)
           
            }).catch((err) => {
            console.log(err)
        })
    },
    CreateMovie : (req, res) => {
    Movie.create(req.body)
     .then((CreatedMovie) => {
                console.log(CreatedMovie)
                res.json(CreatedMovie)
            }).catch((err) => {
            res.json(err)
        })
}

}
