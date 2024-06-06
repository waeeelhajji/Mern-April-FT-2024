// Import our Mongoose
const mongoose = require("mongoose")

// the module - the rules the entries need to follow

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength:[3,"{PATH} must have at least 3 chars"]
    },
    image: {
        type: String
    },
    releaseYear: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1900,"{PATH} must be valid"]
    },
    seen: {
        type: Boolean,
        default : false
    }
}, { timestamps: true })

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie