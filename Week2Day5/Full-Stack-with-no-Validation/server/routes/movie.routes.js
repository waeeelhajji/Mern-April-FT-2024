const MovieControllers = require("../controllers/movie.controllers")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/movies", MovieControllers.AllMovies);
        //? =========== CREATE ==========
        app.post("/api/movies", MovieControllers.CreateMovie)
        //? =========== READ ONE ==========
        app.get('/api/movies/:id', MovieControllers.findOneSingleMovie);
        //? =========== UPDATE ==========
        app.patch('/api/movies/:id', MovieControllers.updateExistingMovie);        
        //? =========== DELETE ==========
        app.delete('/api/movies/:id', MovieControllers.deleteAnExistingMovie);
        

}


