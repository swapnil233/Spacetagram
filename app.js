const express = require("express");
const app = express();

// Environment Variables
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 3000
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2022-01-01`

// EJS View Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Serve static files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "public/img"))
app.use("/js", express.static(__dirname + "public/js"))

// Routes
const indexRouter = require("./src/routes/index");
app.use("/", indexRouter);

// 404 Page
app.get("*", (req, res) => {
    res.render("404")
})

// Listen
app.listen(PORT, (error) => {
    if (error) {
        return console.log("Server error!")
    }

    console.log(`App listening on port ${PORT}`)
})