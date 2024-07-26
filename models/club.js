const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    clubEmail: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("Club", clubSchema);