const MovieControllers = require("../controllers/movie.controllers")


module.exports = (app) => {
    
//? =========== READ ALL ==========

app.get("/api/movies", MovieControllers.AllMovies);

//? =========== CREATE ==========

app.post("/api/movies", MovieControllers.CreateMovie)


    
}


