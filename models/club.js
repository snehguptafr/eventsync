const mongoose = require("mongoose"); //alterbranch
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const ClubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
})

ClubSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Club", ClubSchema);