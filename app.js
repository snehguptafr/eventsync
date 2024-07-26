if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require('express');
const mongoose = require("mongoose");
const session  = require("express-session");
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const passport = require("passport");
const helmet = require("helmet");
const MongoStore = require('connect-mongo');
const LocalStrategy = require("passport-local");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const connectionUrl = process.env.DB_URL || 'mongodb://localhost:27017/clubbed-in';

mongoose
  .connect(connectionUrl)
  .then(() => console.log("Connected to the database"))
  .catch(() => console.log("Error connecting to the db"));

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const sessionConfig = {
    name: "session",
    secret,
    resave: false,
    saveUninitialized: true,
    cookie:{
      httpOnly: true,
      // secure: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));


app.get("/", (req, res) => {
    res.render("home");
})

app.get("/login", (req, res) => {
    res.render("users/login");
})

app.listen(3000, () => {
    console.log("Server up");
}) 