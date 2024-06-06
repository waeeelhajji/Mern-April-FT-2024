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
                    res.status(400).json()
            })
    },
        //? =========== READ ONE ==========
    findOneSingleMovie : (req, res) => {
        Movie.findOne({ _id: req.params.id })
            .then(oneSingleMovie => {
                res.json(oneSingleMovie);
            })
            .catch((err) => {
                res.json(err);
            });
    },
        //? =========== CREATE ==========
        CreateMovie : (req, res) => {
        Movie.create(req.body)
        .then((CreatedMovie) => {
                    console.log(CreatedMovie)
                    res.status(200).json(CreatedMovie)
                }).catch((err) => {
                res.status(400).json(err)
            })
        },
            //? =========== UPDATE ==========
        updateExistingMovie : (req, res) => {
            Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then(updatedMovie => {
                    res.json(updatedMovie);
                })
                .catch((err) => {
                    res.json(err);
                });
        },

        //? =========== DELETE ==========
        deleteAnExistingMovie : (req, res) => {
            Movie.deleteOne({ _id: req.params.id })
                .then(result => {
                    res.json(result);
                })
                .catch((err) => {
                    res.json(err);
                });
        }

}
