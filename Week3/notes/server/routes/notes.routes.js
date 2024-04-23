const NoteControllers = require("../controllers/notes.controllers")


module.exports = (app) => {
        //? =========== READ ALL ==========
        app.get("/api/notes", NoteControllers.AllNotes);
        //? =========== READ ONE ==========
        app.get('/api/notes/:id', NoteControllers.findOneSingleNotes);
        //? =========== UPDATE ==========
        app.patch('/api/notes/:id', NoteControllers.updateExistingNotes);        
        //? =========== CREATE ==========
        app.post("/api/notes", NoteControllers.CreateNotes)
        //? =========== DELETE ==========
        app.delete('/api/notes/:id', NoteControllers.deleteAnExistingNotes);
        
}


