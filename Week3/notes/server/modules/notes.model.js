// Import our Mongoose
const mongoose = require("mongoose")

// the module - the rules the entries need to follow

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
    content: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [20,"{PATH} must have at least 20 chars"]
    },
    isImportant: {
        type: Boolean,
        default : false
    }
}, { timestamps: true })

const Notes = mongoose.model("Notes", NotesSchema)

module.exports = Notes
