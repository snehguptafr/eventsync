const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: true
    },
    posts:[
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

module.exports = mongoose.model("Club", ClubSchema);