const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    club: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model("Post", PostSchema);