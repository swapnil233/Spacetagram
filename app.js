const express = require("express");
const app = express();

const axios = require("axios");

// Environment Variables
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 3000
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&start_date=2022-01-01`

// EJS View Engine
app.set("views", "views");
app.set("view engine", "ejs");

// Serve static files
app.use(express.static('public'));

app.get("/", async (req, res) => {
    const result = await axios.get(url);
    const data = result.data;

    res.render("index", {
        data
    })
})

// Listen
app.listen(PORT, (error) => {
    if (error) {
        return console.log("Server error!")
    }

    console.log(`App listening on port ${PORT}`)
})